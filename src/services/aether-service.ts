import { IAetherRepository } from "@core/repository/iaether-repository";
import { IAetherService } from "@core/services/iaether-service";
import { KafkaMessage } from "kafkajs";
import { RepositoriesSucessHandlers } from "./handlers";

export class AetherService implements IAetherService {
  _aetherRepository: IAetherRepository;

  constructor(aetherRepository: IAetherRepository) {
    this._aetherRepository = aetherRepository;
  }

  handleOrdersQueue(orderMessages: KafkaMessage[]): void {
    const formattedData = orderMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._aetherRepository
      .saveOrders(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleInvalidOrdersQueue(invalidOrderMessages: KafkaMessage[]): void {
    const formattedData = invalidOrderMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._aetherRepository
      .saveInvalidOrders(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
}

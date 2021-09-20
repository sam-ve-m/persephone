import { IGaiaService } from "@core/services/igaia-service";
import { IGaiaRepository } from "@core/repository/igaia-repository";
import { KafkaMessage } from "kafkajs";
import { RepositoriesSucessHandlers } from "./handlers";

export class GaiaService implements IGaiaService {
  _gaiaRepository: IGaiaRepository;

  constructor(gaiaRepository: IGaiaRepository) {
    this._gaiaRepository = gaiaRepository;
  }

  handleOrdersQueue(orderMessages: KafkaMessage[]): void {
    const formattedData = orderMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._gaiaRepository
      .saveOrders(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleResponsesQueue(responseMessages: KafkaMessage[]): void {
    const formattedData = responseMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._gaiaRepository
      .saveResponses(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleSessionMessagesQueue(sessionMessages: KafkaMessage[]): void {
    const formattedData = sessionMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._gaiaRepository
      .saveSessionMessages(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
}

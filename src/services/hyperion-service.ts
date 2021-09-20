import { IHyperionRepository } from "@core/repository/ihyperion-repository";
import { IHyperionService } from "@core/services/ihyperion-service";
import { KafkaMessage } from "kafkajs";
import { RepositoriesSucessHandlers } from "./handlers";

export class HyperionService implements IHyperionService {
  _hyperionRepository: IHyperionRepository;

  constructor(hyperionRepository: IHyperionRepository) {
    this._hyperionRepository = hyperionRepository;
  }

  handleResponsesQueue(responseMessages: KafkaMessage[]): void {
    const formattedData = responseMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._hyperionRepository
      .saveResponses(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
}

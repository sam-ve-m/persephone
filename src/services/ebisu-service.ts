import { IEbisuRepository } from "@core/repository/iebisu-repository";
import { IEbisuService } from "@core/services/iebisu-service";
import { KafkaMessage } from "kafkajs";
import { RepositoriesSucessHandlers } from "./handlers";

export class EbisuService implements IEbisuService {
  _ebisuRepository: IEbisuRepository;

  constructor(EbisuRepository: IEbisuRepository) {
    this._ebisuRepository = EbisuRepository;
  }

  handleBankAccountRegisters(responseMessages: KafkaMessage[]): void {
    const formattedData = responseMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._ebisuRepository
      .saveBankAccountRegisters(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleBankAccountUpdates(responseMessages: KafkaMessage[]): void {
    const formattedData = responseMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._ebisuRepository
      .saveBankAccountUpdates(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleBankAccountDeletions(responseMessages: KafkaMessage[]): void {
    const formattedData = responseMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._ebisuRepository
      .saveBankAccountDeletions(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
}

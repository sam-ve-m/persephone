import { IHermesRepository } from "@core/repository/ihermes-repository";
import { IHermesService } from "@core/services/ihermes-service";
import { KafkaMessage } from "kafkajs";
import { RepositoriesSucessHandlers } from "./handlers";

export class HermesService implements IHermesService {
  _hermesRepository: IHermesRepository;

  constructor(hermesRepository: IHermesRepository) {
    this._hermesRepository = hermesRepository;
  }

  handleOrderSessionAuthenticityQueue(
    orderSessionAuthenticityMessages: KafkaMessage[]
  ): void {
    const formattedData = orderSessionAuthenticityMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._hermesRepository
      .saveOrderSessionAuthenticity(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleOrderSessionIntegrityQueue(
    orderSessionIntegrityMessages: KafkaMessage[]
  ): void {
    const formattedData = orderSessionIntegrityMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });
  
    this._hermesRepository
      .saveOrderSessionIntegrity(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleTradeSessionCreateQueue(
    tradeSessionCreateMessages: KafkaMessage[]
  ): void {
    const formattedData = tradeSessionCreateMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._hermesRepository
      .saveTradeSessionCreate(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleReceivedOrdersQueue(receivedOrderMessages: KafkaMessage[]): void {
    const formattedData = receivedOrderMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._hermesRepository
      .saveReceivedOrders(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleSentOrdersQueue(sentOrderMessages: KafkaMessage[]): void {
    const formattedData = sentOrderMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._hermesRepository
      .saveSentOrders(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleReportOrdersQueue(reportOrderMessages: KafkaMessage[]): void {
    const formattedData = reportOrderMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._hermesRepository
      .saveReportOrders(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
}

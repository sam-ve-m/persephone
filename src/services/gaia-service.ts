import { IGaiaService } from "@core/services/igaia-service";
import { IGaiaRepository } from "@core/repository/igaia-repository";
import { KafkaMessage } from "kafkajs";
import {RepositoriesErrorsHandlers, RepositoriesSucessHandlers} from "@service/handlers";

export class GaiaService implements IGaiaService {
  _gaiaRepository: IGaiaRepository;

  constructor(gaiaRepository: IGaiaRepository) {
    this._gaiaRepository = gaiaRepository;
  }

  handlerAdminQueue(adminMessages: KafkaMessage[]): void {
    const admin = adminMessages.map((adminMessage) => {
      const adminString = adminMessage.value.toString();
      const admin = JSON.parse(adminString);
      return admin
    })

    this._gaiaRepository
        .saveAdmin(admin)
        .then((data) => {
          RepositoriesSucessHandlers.handlerAdminSuccess(data);
        })
        .catch((error) => {
          RepositoriesErrorsHandlers.handlerAdminErrors(error);
        });
  }

  handlerExecutionReportQueue(executionReportMessages: KafkaMessage[]): void {
    const executionReport = executionReportMessages.map((executionReportMessage) => {
      const executionReportString = executionReportMessage.value.toString();
      const executionReport = JSON.parse(executionReportString);
      return executionReport
    })

    this._gaiaRepository
        .saveExecutionReport(executionReport)
        .then((data) => {
          RepositoriesSucessHandlers.handlerExecutionReportSuccess(data);
        })
        .catch((error) => {
          RepositoriesErrorsHandlers.handlerExecutionReportErrors(error);
        });
  }

  handlerNewOrderSingleQueue(newOrderSingleMessages: KafkaMessage[]): void {
    const newOrderSingle = newOrderSingleMessages.map((newOrderSingleMessage) => {
      const newOrderSingleString = newOrderSingleMessage.value.toString();
      const newOrderSingle = JSON.parse(newOrderSingleString);
      return newOrderSingle
    })

    this._gaiaRepository
        .saveNewOrderSingle(newOrderSingle)
        .then((data) => {
          RepositoriesSucessHandlers.handlerNewOrderSingleSuccess(data);
        })
        .catch((error) => {
          RepositoriesErrorsHandlers.handlerNewOrderSingleErrors(error);
        });
  }

  handlerOrderCancelRejectQueue(orderCancelRejectMessages: KafkaMessage[]): void {
    const orderCancelReject = orderCancelRejectMessages.map((orderCancelRejectMessage) => {
      const orderCancelRejectString = orderCancelRejectMessage.value.toString();
      const orderCancelReject = JSON.parse(orderCancelRejectString);
      return orderCancelReject
    })

    this._gaiaRepository
        .saveOrderCancelReject(orderCancelReject)
        .then((data) => {
          RepositoriesSucessHandlers.handlerOrderCancelRejectSuccess(data);
        })
        .catch((error) => {
          RepositoriesErrorsHandlers.handlerOrderCancelRejectErrors(error);
        });
  }

  handlerOrderCancelReplaceRequestQueue(orderCancelReplaceRequestMessages: KafkaMessage[]): void {
    const orderCancelReplaceRequest = orderCancelReplaceRequestMessages.map((orderCancelReplaceRequestMessage) => {
      const orderCancelReplaceRequestString = orderCancelReplaceRequestMessage.value.toString();
      const orderCancelReplaceRequest = JSON.parse(orderCancelReplaceRequestString);
      return orderCancelReplaceRequest
    })

    this._gaiaRepository
        .saveOrderCancelReplaceRequest(orderCancelReplaceRequest)
        .then((data) => {
          RepositoriesSucessHandlers.handlerOrderCancelReplaceRequestSuccess(data);
        })
        .catch((error) => {
          RepositoriesErrorsHandlers.handlerOrderCancelReplaceRequestErrors(error);
        });
  }

  handlerOrderCancelRequestQueue(orderCancelRequestMessages: KafkaMessage[]): void {
    const orderCancelRequest = orderCancelRequestMessages.map((orderCancelRequestMessage) => {
      const orderCancelRequestString = orderCancelRequestMessage.value.toString();
      const orderCancelRequest = JSON.parse(orderCancelRequestString);
      return orderCancelRequest
    })

    this._gaiaRepository
        .saveOrderCancelRequest(orderCancelRequest)
        .then((data) => {
          RepositoriesSucessHandlers.handlerOrderCancelRequestSuccess(data);
        })
        .catch((error) => {
          RepositoriesErrorsHandlers.handlerOrderCancelRequestErrors(error);
        });
  }


}

import { IGaiaService } from "@core/services/igaia-service";
import { IGaiaRepository } from "@core/repository/igaia-repository";
import {KafkaMessage} from "kafkajs";

export class GaiaService implements IGaiaService {
  _gaiaRepository: IGaiaRepository;

  constructor(gaiaRepository: IGaiaRepository) {
    this._gaiaRepository = gaiaRepository;
  }

  handlerAdminQueue(adminMessages: KafkaMessage[]): void {
  }

  handlerExecutionReportQueue(executionReportMessages: KafkaMessage[]): void {
  }

  handlerNewOrderSingleQueue(newOrderSingleMessages: KafkaMessage[]): void {
  }

  handlerOrderCancelRejectQueue(orderCancelRejectMessages: KafkaMessage[]): void {
  }

  handlerOrderCancelReplaceRequestQueue(orderCancelReplaceRequestMessages: KafkaMessage[]): void {
  }

  handlerOrderCancelRequestQueue(orderCancelRequestMessages: KafkaMessage[]): void {
  }


}

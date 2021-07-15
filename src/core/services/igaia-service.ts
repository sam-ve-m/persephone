import { KafkaMessage } from "kafkajs";

export interface IGaiaService {
    handlerAdminQueue(adminMessages: KafkaMessage[]): void;
    handlerNewOrderSingleQueue(newOrderSingleMessages: KafkaMessage[]): void;
    handlerOrderCancelReplaceRequestQueue(orderCancelReplaceRequestMessages: KafkaMessage[]): void;
    handlerOrderCancelRequestQueue(orderCancelRequestMessages: KafkaMessage[]): void;
    handlerExecutionReportQueue(executionReportMessages: KafkaMessage[]): void;
    handlerOrderCancelRejectQueue(orderCancelRejectMessages: KafkaMessage[]): void;
}





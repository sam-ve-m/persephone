import { KafkaMessage } from "kafkajs";

export interface IHermesService {
  handleOrderSessionAuthenticityQueue(orderSessionAuthenticityMessages: KafkaMessage[]): void;
  handleOrderSessionIntegrityQueue(orderSessionIntegrityMessages: KafkaMessage[]): void;
  handleTradeSessionCreateQueue(tradeSessionCreateMessages: KafkaMessage[]): void;
  handleReceivedOrdersQueue(receivedOrderMessages: KafkaMessage[]): void;
  handleSentOrdersQueue(sentOrderMessages: KafkaMessage[]): void;
  handleReportOrdersQueue(reportOrderMessages: KafkaMessage[]): void;
}

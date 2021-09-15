import { Consumer } from "kafkajs";

export interface ConsumerWrapper {
  queueConsumer: Consumer;
  partitionsConsumedConcurrently: number;
}

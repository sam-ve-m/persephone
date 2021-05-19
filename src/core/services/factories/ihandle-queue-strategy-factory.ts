import { IHandleQueueStrategy } from "@core/services/strategies";

export interface IHandleQueueStrategyFactory {
  createHandleQueueStrategy(messageType: string): IHandleQueueStrategy;
}

import { IHandleQueueStrategyFactory } from "@/core/services/factories";
import { IHandleQueueStrategy } from "@/core/services/strategies";

export class HandleQueueStrategyFactory implements IHandleQueueStrategyFactory {
  public constructor() {}

  public createHandleQueueStrategy(messageType: string): IHandleQueueStrategy {
    return null;
  }
}

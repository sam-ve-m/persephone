import { IHandleQueueStrategyFactory } from "@core/services/factories";
import { IRedisClientFactory } from "@core/infraestructure/redis";
import { IQueueService } from "@core/services";

export class QueueService implements IQueueService {
  private readonly _redisClientFactory: IRedisClientFactory;
  private readonly _handleQueueStrategyFactory: IHandleQueueStrategyFactory;

  public constructor(
    _redisClientFactory: IRedisClientFactory,
    _handleQueueStrategyFactory: IHandleQueueStrategyFactory
  ) {
    this._redisClientFactory = _redisClientFactory;
    this._handleQueueStrategyFactory = _handleQueueStrategyFactory;
  }

  public consumeQueueMessages(): void {
    const redisClient = this._redisClientFactory.createClient();
    console.log(redisClient);
  }
}

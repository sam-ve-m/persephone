// import { IQueueService } from "@core/services/iqueue-service";
import { IRedisClientFactory } from "@core/infraestructure/redis/iredis-client-factory";

export class QueueController {
  private readonly _redisClietFactory: IRedisClientFactory;

  public constructor(_redisClientFactory: IRedisClientFactory) {
    this._redisClietFactory = _redisClientFactory;
  }

  public runQueueConsumerService(): void {
    //consume queues
  }
}

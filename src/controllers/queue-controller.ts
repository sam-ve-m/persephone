import { IQueueService } from "@core/services/iqueue-service";

export class QueueController {
  private readonly _queueService: IQueueService;

  public constructor(_queueService: IQueueService) {
    this._queueService = _queueService;
  }

  public runQueueConsumerService(): void {}
}

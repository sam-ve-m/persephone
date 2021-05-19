import { IRedisClientFactory } from "@core/iredis-client-factory";

export class RedisClientFactory implements IRedisClientFactory {
  private constructor() {}

  static create(): void {}
}

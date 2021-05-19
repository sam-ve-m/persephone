import { IRedisClientFactory } from "../../core/infraestructure/iredis-client-factory";

export class RedisClientFactory implements IRedisClientFactory {
  private constructor() {}

  static create(): void {}
}

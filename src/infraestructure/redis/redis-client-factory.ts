import { IRedisClientFactory } from "../../core/infraestructure/iredis-client-factory";

export class RedisClientFactory implements IRedisClientFactory {
  public constructor() {}

  static create(): void {
    // const client = redis.createClient({
    //   host: env.redis_metadata.redis_host,
    //   port: env.redis_metadata.redis_port,
    // });
    // client.send_command("AUTH", [
    //   env.redis_metadata.redis_user,
    //   env.redis_metadata.password,
    // ]);
  }
}

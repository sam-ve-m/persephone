import { Redis } from "ioredis";

import { IRedisClientFactory } from "@core/infraestructure/redis";

//TODO: Resolve this problem
import { env } from "@root/../../enviroment";

export class RedisClientFactory implements IRedisClientFactory {
  createClient(): Redis {
    const redisClient = new Redis({
      host: env.redis_metadata.redis_host,
      port: env.redis_metadata.redis_port,
      family: 4,
      username: env.redis_metadata.redis_user,
      password: env.redis_metadata.password,
    });
    return redisClient;
  }
}

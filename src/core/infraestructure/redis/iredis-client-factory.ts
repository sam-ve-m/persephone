import { Redis } from "ioredis";

export interface IRedisClientFactory {
  createClient(): Redis;
}

import env from "@root/env";
import { POINT_CONVERSION_COMPRESSED } from "constants";

import redis from "redis";

export class QueueController {
  public runQueueConsumerService(): void {
    console.log("Running persephone");

    //Call handleQueueMessages
  }

  // const client = redis.createClient({
  //   host: env.redis_metadata.redis_host,
  //   port: env.redis_metadata.redis_port,
  // });

  // client.send_command("AUTH", [
  //   env.redis_metadata.redis_user,
  //   env.redis_metadata.password,
  // ]);
}

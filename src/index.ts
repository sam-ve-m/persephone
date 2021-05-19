import env from "../env";
const redis = require("redis");

export function run() {
  const client = redis.createClient({
    host: env.redis_metadata.redis_host,
    port: env.redis_metadata.redis_port,
  });

  client.send_command("AUTH", [env.redis_user, env.password]);

  while (true) {
    console.log("Running persephone");
  }
}

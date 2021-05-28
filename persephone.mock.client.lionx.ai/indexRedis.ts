const redis = require("redis");

async function pushElementsOnRedisQueue(redisClient, element) {
  const promise = new Promise((resolve, reject) => {
    let i;
    for (i = 0; i < 5; i++) {
      const teste = element + i + "TESTE TESTE TESTE";
      let arr: Array<string> = new Array(10);
      arr.fill(teste);
      const key = element + ":" + i;

      console.log(key);
      console.log(element);

      redisClient.rpush([key, ...arr], function (err, reply) {
        console.log("Queue Length", reply);
        resolve(element);
      });
    }
  });

  return promise;
}

const main = function () {
  console.log("Entrou");
  let redisNotReady = true;
  let redisClient = redis.createClient({
    host: "127.0.0.1",
    port: 6379,
  });

  redisClient.on("error", (err) => {
    console.log("error", err);
  });

  redisClient.on("connect", (err) => {
    console.log("connect");
  });

  redisClient.on("ready", (err) => {
    redisNotReady = false;
    console.log("ready");

    let rootQueues = {
      a: [],
      b: [],
      c: [],
    };

    Object.keys(rootQueues).forEach((element) => {
      pushElementsOnRedisQueue(redisClient, element).then((data) => {
        redisClient.keys("a:*", function (err, keys) {
          console.log(data);
          console.log(keys);
        });

        redisClient.lrange("a:*", 0, -1, function (err, reply) {
          console.log(reply);
        });
      });
    });
  });
};

main();

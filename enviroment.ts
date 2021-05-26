let { development, uat, production, ...global } = {
  // Dev
  development: {
    database_metadata: {
      db_host: "localhost",
      db_user: "root",
      db_pass: "password",
    },
    redis_metadata: {
      host: "127.0.0.1",
      port: 6379,
      user: "",
      password: "",
      db: null,
      timeout: 3,
      reconncet_times: 3,
      serialize: "",
    },
    kafka_metadata: {
      clientId: "persephone.lionx.com.br",
      brokers: ["127.0.0.1:9092"],
      // brokers: ["10.42.0.1:9092"],
      // brokers: ["10.42.0.95:9092"],
      topics_properties: [
        {
          topic: "thebes.sphinx.topic",
          numPartitions: 7,
          numberOfConsumers: 7,
          consumerGroup: "thebes.sphinx.group",
        },
        {
          topic: "gaia.topic",
          numPartitions: 4,
          numberOfConsumers: 8,
          consumerGroup: "gaia.group",
        },
      ],
    },
  },
};

function getEnv() {
  let envName = process.env.NODE_ENV;

  const propsByEnv = {
    development,
    uat,
    production,
  };
  return { env: envName, ...global, ...propsByEnv[envName] };
}

const env = getEnv();

export { env };

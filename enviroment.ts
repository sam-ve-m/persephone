let { development, ...global } = {
  // Dev
  development: {
    database_metadata: {
      connection_string:
        // "mongodb://root:ea3ca9a9-568b-4c85-9419-778c335ca232@localhost:27017/persephone?poolSize=20&retryWrites=true&w=majority",
        "mongodb://root:ea3ca9a9-568b-4c85-9419-778c335ca232@localhost:27017persephone?poolSize=20&retryWrites=true&w=majority",
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
      // brokers: ["127.0.0.1:9092"],
      // brokers: ["10.42.0.1:9092"],
      brokers: ["10.42.0.95:9092"],
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
  };
  return { env: envName, ...global, ...propsByEnv[envName] };
}

const env = getEnv();

export { env };

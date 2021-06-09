let { development, ...global } = {
  // Dev:
  development: {
    database_metadata: {
      connection_object: {
        uri: "mongodb://localhost:27017",
        options: {
          dbName: "persephone",
          user: "root",
          pass: "ea3ca9a9-568b-4c85-9419-778c335ca232",
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoCreate: true,
        },
      },
    },
    kafka_metadata: {
      clientId: "persephone.lionx.com.br",
      brokers: ["localhost:9092"],
      // brokers: ["10.42.0.1:9092"],
      // brokers: ["10.42.0.95:9092"],
      topics_properties: [
        {
          topic: "thebes.sphinx.topic",
          numPartitions: 5,
          partitionsConsumedConcurrently: 5,
          numberOfConsumers: 5,
          consumerGroup: "thebes.sphinx.group",
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

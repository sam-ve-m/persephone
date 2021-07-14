const { development, uat, production, yaba, ...global } = {
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
      topics_properties: [
        {
          topic: "thebes.sphinx_persephone.topic",
          numPartitions: 6,
          partitionsConsumedConcurrently: 3,
          numberOfConsumers: 6,
          consumerGroup: "thebes.sphinx.group",
        },
      ],
    },
  },
  uat: {
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
      topics_properties: [
        {
          topic: "thebes.sphinx_persephone.topic",
          numPartitions: 6,
          partitionsConsumedConcurrently: 3,
          numberOfConsumers: 6,
          consumerGroup: "thebes.sphinx.group",
        },
      ],
    },
  },
  production: {
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
      topics_properties: [
        {
          topic: "thebes.sphinx_persephone.topic",
          numPartitions: 6,
          partitionsConsumedConcurrently: 3,
          numberOfConsumers: 6,
          consumerGroup: "thebes.sphinx.group",
        },
      ],
    },
  },
  yaba: {
    database_metadata: {
      connection_object: {
        uri: "mongodb://10.42.0.35:27017",
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
      brokers: ["10.42.0.35:9092"],
      topics_properties: [
        {
          topic: "thebes.sphinx_persephone.topic",
          numPartitions: 6,
          partitionsConsumedConcurrently: 3,
          numberOfConsumers: 6,
          consumerGroup: "thebes.sphinx.group",
        },
        // {
        //   // TODO Review gaia env metadata
        //   topic: "gaia_persephone.topic",
        //   numPartitions: 0,
        //   partitionsConsumedConcurrently: 1,
        //   numberOfConsumers: 0,
        //   consumerGroup: "gaia.group",
        // },
      ],
    },
  },
};

function getEnv() {
  const envName = process.env.NODE_ENV;

  const propsByEnv = {
    development,
    uat,
    production,
    yaba,
  };

  // const test = { env: envName, ...global, ...propsByEnv[envName] };
  return { env: envName, ...global, ...propsByEnv[envName] };
}

const env = getEnv();

export { env };

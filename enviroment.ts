require('dotenv').config()

const { localhost, sit, uat, prod, yaba, ...global } = {
  localhost: {
    database_metadata: {
      connection_object: {
        uri: process.env.MONGO_URI,
        options: {
          dbName: process.env.MONGO_DB_NAME,
          user: process.env.MONGO_USER,
          pass: process.env.MONGO_PASSWORD,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoCreate: true,
        },
      },
    },
    kafka_metadata: {
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: process.env.KAKFA_BROKERS.split(";"),
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
  sit: {
    database_metadata: {
      connection_object: {
        uri: process.env.MONGO_URI,
        options: {
          dbName: process.env.MONGO_DB_NAME,
          user: process.env.MONGO_USER,
          pass: process.env.MONGO_PASSWORD,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoCreate: true,
        },
      },
    },
    kafka_metadata: {
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: process.env.KAKFA_BROKERS.split(";"),
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
        uri: process.env.MONGO_URI,
        options: {
          dbName: process.env.MONGO_DB_NAME,
          user: process.env.MONGO_USER,
          pass: process.env.MONGO_PASSWORD,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoCreate: true,
        },
      },
    },
    kafka_metadata: {
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: process.env.KAKFA_BROKERS.split(";"),
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
  prod: {
    database_metadata: {
      connection_object: {
        uri: process.env.MONGO_URI,
        options: {
          dbName: process.env.MONGO_DB_NAME,
          user: process.env.MONGO_USER,
          pass: process.env.MONGO_PASSWORD,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoCreate: true,
        },
      },
    },
    kafka_metadata: {
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: process.env.KAKFA_BROKERS.split(";"),
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
        uri: process.env.MONGO_URI,
        options: {
          dbName: process.env.MONGO_DB_NAME,
          user: process.env.MONGO_USER,
          pass: process.env.MONGO_PASSWORD,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoCreate: true,
        },
      },
    },
    kafka_metadata: {
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: process.env.KAKFA_BROKERS.split(";"),
      topics_properties: [
        {
          topic: "thebes.sphinx_persephone.topic",
          numPartitions: 6,
          partitionsConsumedConcurrently: 3,
          numberOfConsumers: 6,
          consumerGroup: "thebes.sphinx.group",
        },
        {
          // TODO Review gaia env metadata
          // topic: "gaia_persephone.topic",
          // numPartitions: 6,
          // partitionsConsumedConcurrently: 3,
          // numberOfConsumers: 6,
          // consumerGroup: "gaia.group",
        },
      ],
    },
  },
};

function getEnv() {
  const envName = process.env.NODE_ENV;
  

  const propsByEnv = {
    localhost,
    sit,
    uat,
    prod,
    yaba,
  };

  return { env: envName, ...global, ...propsByEnv[envName] };
}

const env = getEnv();

export { env };

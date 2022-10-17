require("dotenv").config();

import { sphinxScope, aetherScope } from "./enviroment.kafka.metadata";
import { gaiaScope, hyperionScope } from "./enviroment.kafka.metadata";
import { hermesScope, ebisuScope } from "./enviroment.kafka.metadata";

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
        ...aetherScope,
        ...gaiaScope,
        ...hermesScope,
        ...hyperionScope,
        ...sphinxScope,
        ...ebisuScope,
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
        ...aetherScope,
        ...gaiaScope,
        ...hermesScope,
        ...hyperionScope,
        ...sphinxScope,
        ...ebisuScope,
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
        ...aetherScope,
        ...gaiaScope,
        ...hermesScope,
        ...hyperionScope,
        ...sphinxScope,
        ...ebisuScope,
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
        ...aetherScope,
        ...gaiaScope,
        ...hermesScope,
        ...hyperionScope,
        ...sphinxScope,
        ...ebisuScope,
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
        ...aetherScope,
        ...gaiaScope,
        ...hermesScope,
        ...hyperionScope,
        ...sphinxScope,
        ...ebisuScope,
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

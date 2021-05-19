let { development, uat, production, ...global } = {
  // Dev
  development: {
    database_metadata: {
      db_host: "localhost",
      db_user: "root",
      db_pass: "password",
    },
    redis_metadata: {
      redis_host: "127.0.0.1",
      redis_port: 6379,
      redis_user: "",
      redis_password: "",
      redis_db: null,
      redis_timeout: 3,
      redis_reconncet_times: 3,
      redis_serialize: "",
    },
  },

  // UAT
  uat: {
    database_metadata: {
      db_host: "localhost",
      db_user: "root",
      db_pass: "password",
    },
    redis_metadata: {
      redis_host: "127.0.0.1",
      redis_port: 6379,
      redis_user: "",
      redis_password: "",
      redis_db: null,
      redis_timeout: 3,
      redis_reconncet_times: 3,
      redis_serialize: "",
    },
  },

  // Prod
  production: {
    database_metadata: {
      db_host: "localhost",
      db_user: "root",
      db_pass: "password",
    },
    redis_metadata: {
      redis_host: "127.0.0.1",
      redis_port: 6379,
      redis_user: "",
      redis_password: "",
      redis_db: null,
      redis_timeout: 3,
      redis_reconncet_times: 3,
      redis_serialize: "",
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
console.log("env", env);

export default env;

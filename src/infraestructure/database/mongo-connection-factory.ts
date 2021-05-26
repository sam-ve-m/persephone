import { Connection, connect, connection, disconnect } from "mongoose";

import { env } from "@root/../../enviroment";
import { IDatabaseConnectionFactory } from "@core/infraestructure/database";

export class MongoConectionFactory implements IDatabaseConnectionFactory {
  private static databaseConnection: Connection;

  getOrCreateDatabaseContext(): Connection {
    if (!MongoConectionFactory.databaseConnection) {
      connect(env.database_metadata.connection_string, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });

      MongoConectionFactory.databaseConnection = connection;

      console.log("MONGO");

      MongoConectionFactory.databaseConnection.once("open", async () => {
        console.info("CONNECTED TO DATABASE");
        return MongoConectionFactory.databaseConnection;
      });

      MongoConectionFactory.databaseConnection.on("error", (data) => {
        console.error("ERROR CONNECTED TO DATABASE", data);
      });
    }

    return MongoConectionFactory.databaseConnection;
  }

  disconnect(): void {
    if (!MongoConectionFactory.databaseConnection) {
      disconnect();
    }
  }
}

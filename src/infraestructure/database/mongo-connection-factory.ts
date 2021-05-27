import { Connection, connect, connection, disconnect } from "mongoose";

import { env } from "@root/../../enviroment";
import { IDatabaseConnectionFactory } from "@core/infraestructure/database";

export class MongoConectionFactory implements IDatabaseConnectionFactory {
  private static databaseConnection: Connection;

  getOrCreateDatabaseContext(): Promise<Connection> {
    let connectionIsOpen: Promise<Connection> = new Promise(
      (resolve, reject) => {
        if (!MongoConectionFactory.databaseConnection) {
          connect(
            env.database_metadata.connection_object.uri,
            env.database_metadata.connection_object.options
          );

          MongoConectionFactory.databaseConnection = connection;

          MongoConectionFactory.databaseConnection.once("open", () => {
            resolve(MongoConectionFactory.databaseConnection);
          });

          MongoConectionFactory.databaseConnection.on("error", (error) => {
            reject(error);
          });
        }
      }
    );

    return connectionIsOpen;
  }

  disconnect(): void {
    if (!MongoConectionFactory.databaseConnection) {
      disconnect();
    }
  }
}

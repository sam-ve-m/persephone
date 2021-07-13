import { Connection, connect, connection, disconnect } from "mongoose";

import { env } from "@root/enviroment";

import { IDatabaseConnectionFactory } from "@core/infraestructure/database";

import { MongoConnectionHandlers } from "@infraestructure/database/mongo-connection-handlers";

export class MongoConectionFactory implements IDatabaseConnectionFactory {
  private static databaseConnection: Connection;

  getOrCreateDatabaseContext(): Promise<Connection> {
    const connectionIsOpen: Promise<Connection> = new Promise(
      (resolve, reject) => {
        if (!MongoConectionFactory.databaseConnection) {
          connect(
            env.database_metadata.connection_object.uri,
            env.database_metadata.connection_object.options
          );

          MongoConectionFactory.databaseConnection = connection;

          MongoConectionFactory.databaseConnection.once("open", (data) => {
            MongoConnectionHandlers.handleConnectionOpenWithSuccess(data);
            resolve(MongoConectionFactory.databaseConnection);
          });

          MongoConectionFactory.databaseConnection.on("error", (error) => {
            MongoConnectionHandlers.handleConnectionOpenError(error);
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

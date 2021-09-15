import { env } from "@root/enviroment";
import Logger from "@infraestructure/logger/logger";
import { Connection, connect, connection, disconnect } from "mongoose";
import { IDatabaseConnectionFactory } from "@core/infraestructure/database";
import { MongoConnectionHandlers } from "@infraestructure/database/mongo-connection-handlers";

export class MongoConnectionFactory implements IDatabaseConnectionFactory {
  private static databaseConnection: Connection;

  getOrCreateDatabaseContext(): Promise<Connection> {
    const connectionIsOpen: Promise<Connection> = new Promise(
      (resolve, reject) => {
        if (!MongoConnectionFactory.databaseConnection) {
          connect(
            env.database_metadata.connection_object.uri,
            env.database_metadata.connection_object.options
          );

          MongoConnectionFactory.databaseConnection = connection;

          MongoConnectionFactory.databaseConnection.once("open", (data) => {
            MongoConnectionHandlers.handleConnectionOpenWithSuccess(data);
            resolve(MongoConnectionFactory.databaseConnection);
          });

          MongoConnectionFactory.databaseConnection.on("error", (error) => {
            MongoConnectionHandlers.handleConnectionOpenError(error);
            reject(error);
          });
        }
      }
    );
    return connectionIsOpen;
  }

  disconnect(): void {
    if (!MongoConnectionFactory.databaseConnection) {
      disconnect().then(err => Logger.error(err));
    }
  }
}

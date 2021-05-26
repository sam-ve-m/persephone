import { Connection } from "mongoose";

export interface IDatabaseConnectionFactory {
  getOrCreateDatabaseContext(): Connection;
  disconnect(): void;
}

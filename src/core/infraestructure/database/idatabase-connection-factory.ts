import { Connection } from "mongoose";

export interface IDatabaseConnectionFactory {
  getOrCreateDatabaseContext(): Promise<Connection>;
  disconnect(): void;
}

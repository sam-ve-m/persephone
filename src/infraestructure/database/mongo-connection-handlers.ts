import Logger from "@infraestructure/logger/logger";

export module MongoConnectionHandlers {
  export const handleConnectionOpenWithSuccess = (data: any) => {
    let message = `MongoDBConnectionFactory: Coonnection sucess with MongoDB server ${data}`;
    Logger.info(message);
  };

  export const handleConnectionOpenError = (error: any) => {
    let message = `MongoDBConnectionFactory: MongoDB DBConnection error ${error}`;
    Logger.error(message);
  };
}

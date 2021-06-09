import Logger from "@infraestructure/logger/logger";

export module RepositoriesSucessHandlers {
  export const handleInsertProspectUsersSucess = (data: Array<any>) => {
    const message = `ProspectedUsers: Inserted with sucess. Number of insetions: ${data.length}`;
    Logger.info(message);
  };

  export const handleInsertTermSucess = (data: Array<any>) => {
    const message = `Terms: Inserted with sucess. Number of insetions: ${data.length}`;
    Logger.info(message);
  };

  export const handleSuitabilitySucess = (data: Array<any>) => {
    const message = `Suitability: Inserted with sucess. Number of insetions: ${data.length}`;
    Logger.info(message);
  };

  export const handleDtvmUserSucess = (data: Array<any>) => {
    const message = `DtvmUser: Inserted with sucess. Number of insetions: ${data.length}`;
    Logger.info(message);
  };

  export const handleDtvmUpdateUserSucess = (data: Array<any>) => {
    const message = `ProspectedUsers: Inserted with sucess. Number of insetions: ${data.length}`;
    Logger.info(message);
  };
}

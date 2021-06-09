import Logger from "@infraestructure/logger/logger";

export module RepositoriesErrorsHandlers {
  export const handleInsertProspectUsersErrors = (error: any) => {
    const message = `ProspectedUsers: Inserted with error. Erros: ${JSON.stringify(
      error
    )}`;
    Logger.info(message);
  };

  export const handleInsertTermErrors = (error: any) => {
    const message = `Terms: Inserted with error. Number of insetions: ${JSON.stringify(
      error
    )}`;
    Logger.info(message);
  };

  export const handleSuitabilityErrors = (error: any) => {
    const message = `Suitability: Inserted with error. Number of insetions: ${JSON.stringify(
      error
    )}`;
    Logger.info(message);
  };

  export const handleDtvmUserErrors = (error: any) => {
    const message = `DtvmUser: Inserted with error. Number of insetions: ${JSON.stringify(
      error
    )}`;
    Logger.info(message);
  };

  export const handleDtvmUpdateUserErrors = (error: any) => {
    const message = `ProspectedUsers: Inserted with error. Number of insetions: ${JSON.stringify(
      error
    )}`;
    Logger.info(message);
  };
}

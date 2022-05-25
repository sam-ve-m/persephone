import Logger from "@infraestructure/logger/logger";

export module RepositoriesSucessHandlers {
  export const handleGeneralSucess = (data: Array<any>) => {
    const message = `Inserted with sucess. Number of insetions: ${data.length}`;
    Logger.info(message);
  };

  export const handleGeneralError = (data: any) => {
    const message = `Error. Message: ${data}`;
    Logger.error(message);
  };

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

  export const handleKycTableSucess = (data: Array<any>) => {
    const message = `KycTableSucess: Inserted with sucess. Number of insetions: ${data.length}`;
    Logger.info(message);
  };

  export const handlerAdminSuccess = (data: Array<any>) => {
    const message = `handlerAdminSuccess: Inserted with success. Number of insertions ${data.length}`;
    Logger.info(message);
  };
  export const handlerExecutionReportSuccess = (data: Array<any>) => {
    const message = `handlerExecutionReportSuccess: Inserted with success. Number of insertions ${data.length}`;
    Logger.info(message);
  };
  export const handlerNewOrderSingleSuccess = (data: Array<any>) => {
    const message = `handlerNewOrderSingleSuccess: Inserted with success. Number of insertions ${data.length}`;
    Logger.info(message);
  };
  export const handlerOrderCancelRejectSuccess = (data: Array<any>) => {
    const message = `handlerOrderCancelRejectSuccess: Inserted with success. Number of insertions ${data.length}`;
    Logger.info(message);
  };
  export const handlerOrderCancelReplaceRequestSuccess = (data: Array<any>) => {
    const message = `handlerOrderCancelReplaceRequestSuccess: Inserted with success. Number of insertions ${data.length}`;
    Logger.info(message);
  };
  export const handlerOrderCancelRequestSuccess = (data: Array<any>) => {
    const message = `handlerOrderCancelRequestSuccess: Inserted with success. Number of insertions ${data.length}`;
    Logger.info(message);
  };
}

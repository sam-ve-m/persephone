import {
    IAdmin,
    IExecutionReport,
    INewOrderSingle,
    IOrderCancelReject,
    IOrderCancelReplaceRequest,
    IOrderCancelRequest
} from "@domain/gaia";

export interface IGaiaRepository {
    saveAdmin(admin: IAdmin[]): Promise<any>;
    saveNewOrderSingle(newOrderSingle: INewOrderSingle[]): Promise<any>;
    saveOrderCancelReplaceRequest(orderCancelReplaceRequest: IOrderCancelReplaceRequest[]): Promise<any>;
    saveOrderCancelRequest(orderCancelRequest: IOrderCancelRequest[]): Promise<any>;
    saveExecutionReport(executionReport: IExecutionReport[]): Promise<any>;
    saveOrderCancelReject(orderCancelReject: IOrderCancelReject[]): Promise<any>;
}








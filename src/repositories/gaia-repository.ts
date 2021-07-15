import { IGaiaRepository } from "@core/repository/igaia-repository";
import { IAdmin, AdminModel } from "@domain/gaia";
import { IExecutionReport, ExecutionReportModel } from "@domain/gaia";
import { INewOrderSingle, NewOrderSingleModel } from "@domain/gaia";
import { IOrderCancelReject, OrderCancelRejectModel } from "@domain/gaia";
import { IOrderCancelReplaceRequest, OrderCancelReplaceRequestModel } from "@domain/gaia";
import { IOrderCancelRequest, OrderCancelRequestModel } from "@domain/gaia";


export class GaiaRepository implements IGaiaRepository {
    saveAdmin(admin: IAdmin[]): Promise<any> {
        return AdminModel.insertMany(admin)
    }

    saveExecutionReport(executionReport: IExecutionReport[]): Promise<any> {
        return ExecutionReportModel.insertMany(executionReport)
    }

    saveNewOrderSingle(newOrderSingle: INewOrderSingle[]): Promise<any> {
        return NewOrderSingleModel.insertMany(newOrderSingle)
    }

    saveOrderCancelReject(orderCancelReject: IOrderCancelReject[]): Promise<any> {
        return OrderCancelRejectModel.insertMany(orderCancelReject)
    }

    saveOrderCancelReplaceRequest(orderCancelReplaceRequest: IOrderCancelReplaceRequest[]): Promise<any> {
        return OrderCancelReplaceRequestModel.insertMany(orderCancelReplaceRequest)
    }

    saveOrderCancelRequest(orderCancelRequest: IOrderCancelRequest[]): Promise<any> {
        return OrderCancelRequestModel.insertMany(orderCancelRequest)
    }

}

import { Document, Model } from "mongoose";

export interface IHermesReportOrder { 
    ip: String;
    device_id: String;
    device_info: Object;
    cl_order_id: String;
    jwt: String;
    report: Object;
    created_at: Number;
}

export interface IHermesReportOrderDocument extends IHermesReportOrder, Document {}
export interface IHermesReportOrderModel extends Model<IHermesReportOrderDocument> {}
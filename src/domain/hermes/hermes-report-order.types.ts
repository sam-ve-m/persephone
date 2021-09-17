import { Document, Model } from "mongoose";

export interface IHermesReportOrder { }

export interface IHermesReportOrderDocument extends IHermesReportOrder, Document {}
export interface IHermesReportOrderModel extends Model<IHermesReportOrderDocument> {}
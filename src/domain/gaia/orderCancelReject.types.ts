
import { Document, Model } from "mongoose";

interface IOrderCancelRejectJson {
    msgType: string;
    clOrdID: string;
    orderID: string;
    ordStatus: string;
    origCIOrdID: string;
    cxlRejReason: number;
    cxlRejResponseTo: string;
    text: string;
}

export interface IOrderCancelReject {
   json: IOrderCancelRejectJson;
   fix: string;
}

export interface IOrderCancelRejectDocument extends IOrderCancelReject, Document {}
export interface IOrderCancelRejectModel extends Model<IOrderCancelRejectDocument> {}


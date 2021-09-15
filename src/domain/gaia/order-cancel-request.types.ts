import { Document, Model } from "mongoose";

interface IOrderCancelRequestJson {
    msg_type: string;
    cl_order_id: string;
    quantity: number;
    origin_cl_order_id: string;
    side: string;
    symbol: string;
}
export interface IOrderCancelRequest {
    json: IOrderCancelRequestJson;
    fix: string;
}

export interface IOrderCancelRequestDocument extends IOrderCancelRequest, Document {}
export interface IOrderCancelRequestModel extends Model<IOrderCancelRequestDocument> {}


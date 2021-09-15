
import { Document, Model } from "mongoose";

interface IOrderCancelReplaceRequestJson {
    msg_type: string;
    account: string;
    cl_order_id: string;
    handl_inst: string;
    ord_type: string;
    origin_cl_order_id: string;
    side: string;
    symbol: string;
    price: number;
    stop_px: number;
    time_in_force: string;
}
export interface IOrderCancelReplaceRequest {
    json: IOrderCancelReplaceRequestJson;
    fix: string;
}

export interface IOrderCancelReplaceRequestDocument extends IOrderCancelReplaceRequest, Document {}
export interface IOrderCancelReplaceRequestModel extends Model<IOrderCancelReplaceRequestDocument> {}


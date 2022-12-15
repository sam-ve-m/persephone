import { Document, Model } from "mongoose";

export interface IHermesSentOrder {
    sent_order: Object;
    device_id: String;
    device_info: Object;
    cl_order_id: String;
    created_at: Number;
 }

export interface IHermesSentOrderDocument extends IHermesSentOrder, Document {}
export interface IHermesSentOrderModel extends Model<IHermesSentOrderDocument> {}
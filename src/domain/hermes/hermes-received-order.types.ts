import { Document, Model } from "mongoose";

export interface IHermesReceivedOrder {
    ip: String;
    jwt: String;
    jwt_token_session: String;
    request: Object;
    is_session_valid: Boolean;
    message: String;
    cl_order_id: String;
    connection_unique_id: String;
    created_at: Number;
 }

export interface IHermesReceivedOrderDocument extends IHermesReceivedOrder, Document {}
export interface IHermesReceivedOrderModel extends Model<IHermesReceivedOrderDocument> {}
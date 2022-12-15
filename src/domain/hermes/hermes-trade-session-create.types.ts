import { Document, Model } from "mongoose";

export interface IHermesTradeSessionCreate {
    ip: String;
    device_id: String;
    device_info: Object;
    jwt: String;
    created: Boolean;
    jwt_token_session: String;
    message: String;
    signature_expire_time: Number;
    email: String;
    connection_unique_id: String;
    created_at: Number;
 }

export interface IHermesTradeSessionCreateDocument extends IHermesTradeSessionCreate, Document {}
export interface IHermesTradeSessionCreateModel extends Model<IHermesTradeSessionCreateDocument> {}
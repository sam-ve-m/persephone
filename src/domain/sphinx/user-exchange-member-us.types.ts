import { Document, Model } from "mongoose";

export interface IUserExchangeMemberUsData {
    unique_id: String;
    device_id: String;
    device_info: Object;
    exchange_member: Boolean;
    created_at: Number;
}

export interface IUserExchangeMemberUsDataDocument extends IUserExchangeMemberUsData, Document {}
export interface IUserExchangeMemberUsDataModel extends Model<IUserExchangeMemberUsDataDocument> {}
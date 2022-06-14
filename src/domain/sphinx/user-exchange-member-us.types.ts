import { Document, Model } from "mongoose";

export interface IUserExchangeMemberUsData {
    exchange_member: Boolean;
    unique_id: String;
}

export interface IUserExchangeMemberUsDataDocument extends IUserExchangeMemberUsData, Document {}
export interface IUserExchangeMemberUsDataModel extends Model<IUserExchangeMemberUsDataDocument> {}
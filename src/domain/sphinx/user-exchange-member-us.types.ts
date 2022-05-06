import { Document, Model } from "mongoose";

export interface IUserExchangeMemberUsSchemaData {
    exchange_member: Boolean;
    unique_id: String;
}

export interface IUserExchangeMemberUsSchemaDataDocument extends IUserExchangeMemberUsSchemaData, Document {}
export interface IUserExchangeMemberUsSchemaDataModel extends Model<IUserExchangeMemberUsSchemaDataDocument> {}
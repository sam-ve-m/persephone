import { Document, Model } from "mongoose";

export interface IUserIdentifierData {
    user_email: String,
    cpf: String,
    cel_phone: String,
    created_at: Number,
}

export interface IUserIdentifierDataDocument extends IUserIdentifierData, Document {}
export interface IUserIdentifierDataModel extends Model<IUserIdentifierDataDocument> {}
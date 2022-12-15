import { Document, Model } from "mongoose";

export interface IUserIdentifierData {
    unique_id: String,
    device_id: String,
    device_info: Object,
    cpf: String,
    cel_phone: String,
    tax_residences: Array<Object>,
    created_at: Number,
}

export interface IUserIdentifierDataDocument extends IUserIdentifierData, Document {}
export interface IUserIdentifierDataModel extends Model<IUserIdentifierDataDocument> {}
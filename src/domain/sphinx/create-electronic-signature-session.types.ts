import { Document, Model } from "mongoose";

export interface ICreateElectronicSignatureSession { 
    ip: String;
    jwt: String;
    is_integrity: Boolean;
    jwt_missing_fields: String;
    connection_unique_id: String;
    created_at: Number;
}

export interface ICreateElectronicSignatureSessionDocument extends ICreateElectronicSignatureSession, Document {}
export interface ICreateElectronicSignatureSessionModel extends Model<ICreateElectronicSignatureSessionDocument> {}
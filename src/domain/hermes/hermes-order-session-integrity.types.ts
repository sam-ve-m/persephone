import { Document, Model } from "mongoose";

export interface IHermesOrderSessionIntegrity { 
    ip: String;
    device_id: String;
    device_info: Object;
    jwt: String;
    is_integrity: Boolean;
    jwt_missing_fields: String;
    connection_unique_id: String;
    created_at: Number;
}

export interface IHermesOrderSessionIntegrityDocument extends IHermesOrderSessionIntegrity, Document {}
export interface IHermesOrderSessionIntegrityModel extends Model<IHermesOrderSessionIntegrityDocument> {}
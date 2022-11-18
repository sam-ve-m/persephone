import { Document, Model } from "mongoose";

export interface ICreateElectronicSignatureSession {
    unique_id: String;
    device_id: String;
    device_info: Object;
    mist_session: Object;
    allowed: Boolean;
    created_at: Number;
}

export interface ICreateElectronicSignatureSessionDocument extends ICreateElectronicSignatureSession, Document {}
export interface ICreateElectronicSignatureSessionModel extends Model<ICreateElectronicSignatureSessionDocument> {}
import { Document, Model } from "mongoose";

export interface ICreateElectronicSignatureSession {
    user_email: String;
    mist_session: Object;
    allowed: Boolean;
    created_at: Number;
}

export interface ICreateElectronicSignatureSessionDocument extends ICreateElectronicSignatureSession, Document {}
export interface ICreateElectronicSignatureSessionModel extends Model<ICreateElectronicSignatureSessionDocument> {}
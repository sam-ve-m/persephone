import { Document, Model } from "mongoose";

export interface IUserChangeOrResetElectronicSignature {
    unique_id: String;
    device_id: String;
    device_info: Object;
    previous_electronic_signature: String;
    previous_is_blocked_electronic_signature: Boolean;
    previous_electronic_signature_wrong_attempts: Number;
    new_electronic_signature: String;
    new_is_blocked_electronic_signature: Boolean;
    new_electronic_signature_wrong_attempts: Number;
    created_at: Number;
}

export interface IUserChangeOrResetElectronicSignatureDocument extends IUserChangeOrResetElectronicSignature, Document {}
export interface IUserChangeOrResetElectronicSignatureModel extends Model<IUserChangeOrResetElectronicSignatureDocument> {}
import { Document, Model } from "mongoose";

export interface IDwAccountData {
    unique_id: String;
    cpf: String;
    dw_account: Object;
    created_at: Number;
}

export interface IDwAccountDataDocument extends IDwAccountData, Document {}
export interface IDwAccountDataModel extends Model<IDwAccountDataDocument> {}
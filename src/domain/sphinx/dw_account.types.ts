import { Document, Model } from "mongoose";

export interface IDwAccountData {
    unique_id: String;
    account: String;
    display_account: String;
    created_at: Number;
}

export interface IDwAccountDataDocument extends IDwAccountData, Document {}
export interface IDwAccountDataModel extends Model<IDwAccountDataDocument> {}
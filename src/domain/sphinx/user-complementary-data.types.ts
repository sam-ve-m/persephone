import { Document, Model } from "mongoose";

export interface IUserComplementaryData {
    unique_id: String;
    is_us_person: Boolean;
    us_tin: String;
    is_cvm_qualified_investor: Boolean;
    marital: JSON;
    created_at: Number;
}

export interface IUserComplementaryDataDocument extends IUserComplementaryData, Document {}
export interface IUserComplementaryDataModel extends Model<IUserComplementaryDataDocument> {}
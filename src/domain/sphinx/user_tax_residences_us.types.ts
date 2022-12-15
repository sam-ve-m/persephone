import { Document, Model } from "mongoose";

export interface IGetUserTaxResidencesSchemaTemplateWithDataData {
    unique_id: String;
    device_id: String;
    device_info: Object;
    tax_residences: Array<Object>;
    created_at: Number;
}

export interface IGetUserTaxResidencesSchemaTemplateWithDataDataDocument extends IGetUserTaxResidencesSchemaTemplateWithDataData, Document {}
export interface IGetUserTaxResidencesSchemaTemplateWithDataDataModel extends Model<IGetUserTaxResidencesSchemaTemplateWithDataDataDocument> {}
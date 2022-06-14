import { Document, Model } from "mongoose";

export interface IGetUserTaxResidencesSchemaTemplateWithDataData {
    tax_residences: Array<Object>;
    unique_id: String;
}

export interface IGetUserTaxResidencesSchemaTemplateWithDataDataDocument extends IGetUserTaxResidencesSchemaTemplateWithDataData, Document {}
export interface IGetUserTaxResidencesSchemaTemplateWithDataDataModel extends Model<IGetUserTaxResidencesSchemaTemplateWithDataDataDocument> {}
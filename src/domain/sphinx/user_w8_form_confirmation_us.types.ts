import { Document, Model } from "mongoose";

export interface IGetW8FormConfirmationSchemaTemplateWithDataData {
    w8_form_confirmation: String;
    unique_id: String;
}

export interface IGetW8FormConfirmationSchemaTemplateWithDataDataDocument extends IGetW8FormConfirmationSchemaTemplateWithDataData, Document {}
export interface IGetW8FormConfirmationSchemaTemplateWithDataDataModel extends Model<IGetW8FormConfirmationSchemaTemplateWithDataDataDocument> {}
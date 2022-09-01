import { Document, Model } from "mongoose";

export interface IGetW8FormConfirmationSchemaTemplateWithDataData {
    w8_form_confirmation: Boolean;
    unique_id: String;
    created_at: Number;
}

export interface IGetW8FormConfirmationSchemaTemplateWithDataDataDocument extends IGetW8FormConfirmationSchemaTemplateWithDataData, Document {}
export interface IGetW8FormConfirmationSchemaTemplateWithDataDataModel extends Model<IGetW8FormConfirmationSchemaTemplateWithDataDataDocument> {}
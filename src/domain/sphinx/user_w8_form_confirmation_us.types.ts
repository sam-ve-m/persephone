import { Document, Model } from "mongoose";

export interface IGetW8FormConfirmationSchemaTemplateWithDataData {
    unique_id: String;
    device_id: String;
    device_info: Object;
    w8_form_confirmation: Boolean;
    created_at: Number;
}

export interface IGetW8FormConfirmationSchemaTemplateWithDataDataDocument extends IGetW8FormConfirmationSchemaTemplateWithDataData, Document {}
export interface IGetW8FormConfirmationSchemaTemplateWithDataDataModel extends Model<IGetW8FormConfirmationSchemaTemplateWithDataDataDocument> {}
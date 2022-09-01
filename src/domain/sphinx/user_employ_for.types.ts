import { Document, Model } from "mongoose";

export interface IGetUserEmployForSchemaTemplateWithDataData {
    employ_status: String;
    employ_type: String;
    employ_position: String;
    employ_company_name: String;
    unique_id: String;
    created_at: Number;
}

export interface IGetUserEmployForSchemaTemplateWithDataDataDocument extends IGetUserEmployForSchemaTemplateWithDataData, Document {}
export interface IGetUserEmployForSchemaTemplateWithDataDataModel extends Model<IGetUserEmployForSchemaTemplateWithDataDataDocument> {}
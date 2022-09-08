import { Document, Model } from "mongoose";

export interface IGetUserEmployForSchemaTemplateWithDataData {
    unique_id: String;
    employ_status: String;
    employ_type: String;
    employ_position: String;
    employ_company_name: String;
    created_at: Number;
}

export interface IGetUserEmployForSchemaTemplateWithDataDataDocument extends IGetUserEmployForSchemaTemplateWithDataData, Document {}
export interface IGetUserEmployForSchemaTemplateWithDataDataModel extends Model<IGetUserEmployForSchemaTemplateWithDataDataDocument> {}
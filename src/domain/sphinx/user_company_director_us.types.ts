import { Document, Model } from "mongoose";

export interface IGetUserCompanyDirectorSchemaTemplateWithDataData {
    unique_id: String;
    company_director: String;
    company_director_of: Boolean;
    created_at: Number;
}

export interface IGetUserCompanyDirectorSchemaTemplateWithDataDataDocument extends IGetUserCompanyDirectorSchemaTemplateWithDataData, Document {}
export interface IGetUserCompanyDirectorSchemaTemplateWithDataDataModel extends Model<IGetUserCompanyDirectorSchemaTemplateWithDataDataDocument> {}
import { Document, Model } from "mongoose";

export interface IGetUserCompanyDirectorSchemaTemplateWithDataData {
    company_director: String;
    company_director_from: Boolean;
    unique_id: String;
}

export interface IGetUserCompanyDirectorSchemaTemplateWithDataDataDocument extends IGetUserCompanyDirectorSchemaTemplateWithDataData, Document {}
export interface IGetUserCompanyDirectorSchemaTemplateWithDataDataModel extends Model<IGetUserCompanyDirectorSchemaTemplateWithDataDataDocument> {}
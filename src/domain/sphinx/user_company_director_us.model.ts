import { model } from "mongoose";

import { IGetUserCompanyDirectorSchemaTemplateWithDataData } from "@domain/sphinx/user_company_director_us.types";
import GetUserCompanyDirectorSchemaTemplateWithDataData from "@domain/sphinx/user_company_director_us.schema";

export const GetUserCompanyDirectorSchemaTemplateWithDataDataModel = model<IGetUserCompanyDirectorSchemaTemplateWithDataData>(
    "user_company_director_us",
    GetUserCompanyDirectorSchemaTemplateWithDataData
);
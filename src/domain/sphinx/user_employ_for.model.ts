import { model } from "mongoose";

import { IGetUserEmployForSchemaTemplateWithDataData } from "@domain/sphinx/user_employ_for.types";
import GetUserEmployForSchemaTemplateWithDataData from "@domain/sphinx/user_employ_for.schema";

export const GetUserEmployForSchemaTemplateWithDataDataModel = model<IGetUserEmployForSchemaTemplateWithDataData>(
    "user_employ_for",
    GetUserEmployForSchemaTemplateWithDataData
);
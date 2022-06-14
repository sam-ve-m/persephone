import { model } from "mongoose";

import { IGetUserEmployForSchemaTemplateWithDataData } from "@domain/sphinx/user_employ_for.types";
import GetUserEmployForSchemaTemplateWithDataDataSchema from "@domain/sphinx/user_employ_for.schema";

export const GetUserEmployForSchemaTemplateWithDataDataModel = model<IGetUserEmployForSchemaTemplateWithDataData>(
    "user_employ_for",
    GetUserEmployForSchemaTemplateWithDataDataSchema
);
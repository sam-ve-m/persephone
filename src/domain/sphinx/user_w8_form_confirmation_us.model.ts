import { model } from "mongoose";

import { IGetW8FormConfirmationSchemaTemplateWithDataData } from "@domain/sphinx/user_w8_form_confirmation_us.types";
import GetW8FormConfirmationSchemaTemplateWithDataDataSchema from "@domain/sphinx/user_w8_form_confirmation_us.schema";

export const GetW8FormConfirmationSchemaTemplateWithDataDataModel = model<IGetW8FormConfirmationSchemaTemplateWithDataData>(
    "user_w8_form_confirmation_us",
    GetW8FormConfirmationSchemaTemplateWithDataDataSchema
);
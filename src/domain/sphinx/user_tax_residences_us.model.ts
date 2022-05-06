import { model } from "mongoose";

import { IGetUserTaxResidencesSchemaTemplateWithDataData } from "@domain/sphinx/user_tax_residences_us.types";
import GetUserTaxResidencesSchemaTemplateWithDataData from "@domain/sphinx/user_tax_residences_us.schema";

export const GetUserTaxResidencesSchemaTemplateWithDataDataModel = model<IGetUserTaxResidencesSchemaTemplateWithDataData>(
    "user_tax_residences_us",
    GetUserTaxResidencesSchemaTemplateWithDataData
);
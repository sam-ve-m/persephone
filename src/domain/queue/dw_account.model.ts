import { model } from "mongoose";

import { IDwAccountData } from "@domain/sphinx/dw_account.types";
import DwAccountDataSchema from "@domain/sphinx/dw_account.schema";

export const DwAccountDataModel = model<IDwAccountData>(
    "dw_account",
    DwAccountDataSchema
);
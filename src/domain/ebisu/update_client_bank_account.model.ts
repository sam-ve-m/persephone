import { model } from "mongoose";

import { IUpdateBankAccount } from "@domain/ebisu/update_client_bank_account.types";
import UpdateBankAccountSchema from "@domain/ebisu/update_client_bank_account.schema";

export const UpdateBankAccountModel = model<IUpdateBankAccount>(
    "update_client_bank_account",
    UpdateBankAccountSchema
);
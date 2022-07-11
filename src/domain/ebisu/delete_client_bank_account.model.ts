import { model } from "mongoose";

import { IDeleteBankAccount } from "@domain/ebisu/delete_client_bank_account.types";
import DeleteBankAccountSchema from "@domain/ebisu/delete_client_bank_account.schema";

export const DeleteBankAccountModel = model<IDeleteBankAccount>(
    "delete_client_bank_account",
    DeleteBankAccountSchema
);
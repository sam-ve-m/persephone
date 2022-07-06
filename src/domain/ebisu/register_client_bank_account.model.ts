import { model } from "mongoose";

import { IRegisterBankAccount } from "@domain/ebisu/register_client_bank_account.types";
import RegisterBankAccountSchema from "@domain/ebisu/register_client_bank_account.schema";

export const RegisterBankAccountModel = model<IRegisterBankAccount>(
    "register_client_bank_account",
    RegisterBankAccountSchema
);
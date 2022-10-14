import { model } from "mongoose";

import { IExchangeAccountStatus } from "@domain/sphinx/status_exchange_account.types";
import ExchangeAccountStatusSchema from "@domain/sphinx/status_exchange_account.schema";

export const ExchangeAccountStatusModel = model<IExchangeAccountStatus>(
    "exchange_account_status",
    ExchangeAccountStatusSchema
);
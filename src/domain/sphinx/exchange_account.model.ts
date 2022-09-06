import { model } from "mongoose";

import { IExchangeAccountData } from "@domain/sphinx/exchange_account.types";
import ExchangeAccountDataSchema from "@domain/sphinx/exchange_account.schema";

export const ExchangeAccountDataModel = model<IExchangeAccountData>(
    "exchange_account",
    ExchangeAccountDataSchema
);
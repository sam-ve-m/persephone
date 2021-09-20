import { model } from "mongoose";

import { IHermesTradeSessionCreate } from "@domain/hermes/hermes-trade-session-create.types";
import HermesTradeSessionCreateSchema from "@domain/hermes/hermes-trade-session-create.schema";

export const HermesTradeSessionCreateModel = model<IHermesTradeSessionCreate>(
    "hermes-trade-session-create",
    HermesTradeSessionCreateSchema
);
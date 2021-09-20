import { model } from "mongoose";

import { IHermesSentOrder } from "@domain/hermes/hermes-sent-order.types";
import HermesSentOrderSchema from "@domain/hermes/hermes-sent-order.schema";

export const HermesSentOrderModel = model<IHermesSentOrder>(
    "hermes-sent-order",
    HermesSentOrderSchema
);
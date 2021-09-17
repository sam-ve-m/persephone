import { model } from "mongoose";

import { IHermesReceivedOrder } from "@domain/hermes/hermes-received-order.types";
import HermesReceivedOrderSchema from "@domain/hermes/hermes-received-order.schema";

export const HermesReceivedOrderModel = model<IHermesReceivedOrder>(
    "hermes-received-order",
    HermesReceivedOrderSchema
);
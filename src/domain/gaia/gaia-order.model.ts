import { model } from "mongoose";

import { IGaiaOrder } from "@domain/gaia/gaia-order.types";
import GaiaOrderSchema from "@domain/gaia/gaia-order.schema";

export const GaiaOrderModel = model<IGaiaOrder>(
    "gaia-order",
    GaiaOrderSchema
);
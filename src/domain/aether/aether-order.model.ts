import { model } from "mongoose";

import { IAetherOrder } from "@domain/aether/aether-order.types";
import AetherOrderSchema from "@domain/aether/aether-order.schema";

export const AetherOrderModel = model<IAetherOrder>(
    "aether-order",
    AetherOrderSchema
);
import { model } from "mongoose";

import { IAetherInvalidOrder } from "@domain/aether/aether-invalid-order.types";
import AetherInvalidOrderSchema from "@domain/aether/aether-invalid-order.schema";

export const AetherInvalidOrderModel = model<IAetherInvalidOrder>(
    "aether-invalid-order",
    AetherInvalidOrderSchema
);
import { model } from "mongoose";
      
import { IOrderCancelReject } from "@domain/gaia/order-cancel-reject.types";
import OrderCancelRejectSchema from "@domain/gaia/order-cancel-reject.schema";
      
export const OrderCancelRejectModel = model<IOrderCancelReject>(
    "order-cancel-reject",
    OrderCancelRejectSchema
);
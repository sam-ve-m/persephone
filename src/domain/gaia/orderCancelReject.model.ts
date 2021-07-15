import { model } from "mongoose";
      
import { IOrderCancelReject } from "@domain/gaia/orderCancelReject.types";
import OrderCancelRejectSchema from "@domain/gaia/orderCancelReject.schema";
      
export const OrderCancelRejectModel = model<IOrderCancelReject>(
    "orderCancelReject",
    OrderCancelRejectSchema
);
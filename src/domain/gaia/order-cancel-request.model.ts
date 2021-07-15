import { model } from "mongoose";
      
import { IOrderCancelRequest } from "@domain/gaia/order-cancel-request.types";
import OrderCancelRequestSchema from "@domain/gaia/order-cancel-request.schema";
      
export const OrderCancelRequestModel = model<IOrderCancelRequest>(
    "order-cancel-request",
    OrderCancelRequestSchema
);
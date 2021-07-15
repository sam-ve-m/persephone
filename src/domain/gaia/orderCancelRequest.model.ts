import { model } from "mongoose";
      
import { IOrderCancelRequest } from "@domain/gaia/orderCancelRequest.types";
import OrderCancelRequestSchema from "@domain/gaia/orderCancelRequest.schema";
      
export const OrderCancelRequestModel = model<IOrderCancelRequest>(
    "orderCancelRequest",
    OrderCancelRequestSchema
);
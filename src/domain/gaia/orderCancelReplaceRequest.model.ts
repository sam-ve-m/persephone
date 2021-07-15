import { model } from "mongoose";
      
import { IOrderCancelReplaceRequest } from "@domain/gaia/orderCancelReplaceRequest.types";
import OrderCancelReplaceRequestSchema from "@domain/gaia/orderCancelReplaceRequest.schema";
      
export const OrderCancelReplaceRequestModel = model<IOrderCancelReplaceRequest>(
    "orderCancelReplaceRequest",
    OrderCancelReplaceRequestSchema
);
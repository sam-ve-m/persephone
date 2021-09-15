import { model } from "mongoose";
      
import { IOrderCancelReplaceRequest } from "@domain/gaia/order-cancel-replace-request.types";
import OrderCancelReplaceRequestSchema from "@domain/gaia/order-cancel-replace-request.schema";
      
export const OrderCancelReplaceRequestModel = model<IOrderCancelReplaceRequest>(
    "order-cancel-replace-request",
    OrderCancelReplaceRequestSchema
);
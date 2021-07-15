import { model } from "mongoose";
      
import { INewOrderSingle } from "@domain/gaia/new-order-single.types";
import NewOrderSingleSchema from "@domain/gaia/new-order-single.schema";
      
export const NewOrderSingleModel = model<INewOrderSingle>(
    "new-order-single",
    NewOrderSingleSchema
);
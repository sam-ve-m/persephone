import { model } from "mongoose";
      
import { INewOrderSingle } from "@domain/gaia/newOrderSingle.types";
import NewOrderSingleSchema from "@domain/gaia/newOrderSingle.schema";
      
export const NewOrderSingleModel = model<INewOrderSingle>(
    "newOrderSingle",
    NewOrderSingleSchema
);
import { model } from "mongoose";
      
import { IAdmin } from "@domain/gaia/admin.types";
import AdminSchema from "@domain/gaia/admin.schema";
      
export const AdminModel = model<IAdmin>(
    "admin",
    AdminSchema
);
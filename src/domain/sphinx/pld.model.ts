import { model } from "mongoose";

import { IPld } from "@domain/sphinx/pld.types";
import PldSchema from "@domain/sphinx/pld.schema";

export const PldModel = model<IPld>(
    "pld",
    PldSchema
);
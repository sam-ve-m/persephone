import { model } from "mongoose";

import { IBureauCallback } from "@domain/sphinx/bureau-callback.types";
import BureauCallbackSchema from "@domain/sphinx/bureau-callback.schema";

export const BureauCallbackModel = model<IBureauCallback>(
    "bureau-callback",
    BureauCallbackSchema
);
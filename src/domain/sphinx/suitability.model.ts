import { model } from "mongoose";

import { ISuitability } from "@domain/sphinx/suitability.types";
import SuitabilitySchema from "@domain/sphinx/suitability.schema";

export const SuitabilityModel = model<ISuitability>(
    "suitability",
    SuitabilitySchema
);
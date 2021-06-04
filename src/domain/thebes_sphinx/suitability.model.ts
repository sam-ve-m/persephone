import { model } from "mongoose";

import { ISuitability } from "@domain/thebes_sphinx/suitability.types";
import SuitabilitySchema from "./suitability.schema";

export const SuitabilityModel = model<ISuitability>(
  "suitability",
  SuitabilitySchema
);

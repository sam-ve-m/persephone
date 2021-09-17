import { model } from "mongoose";

import { IGaiaResponse } from "@domain/gaia/gaia-response.types";
import GaiaResponseSchema from "@domain/gaia/gaia-response.schema";

export const GaiaResponseModel = model<IGaiaResponse>(
    "gaia-response",
    GaiaResponseSchema
);
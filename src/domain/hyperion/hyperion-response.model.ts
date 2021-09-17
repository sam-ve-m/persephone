import { model } from "mongoose";

import { IHyperionResponse } from "@domain/hyperion/hyperion-response.types";
import HyperionResponseSchema from "@domain/hyperion/hyperion-response.schema";

export const HyperionResponseModel = model<IHyperionResponse>(
    "hyperion-response",
    HyperionResponseSchema
);
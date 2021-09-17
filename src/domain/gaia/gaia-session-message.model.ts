import { model } from "mongoose";

import { IGaiaSessionMessage } from "@domain/gaia/gaia-session-message.types";
import GaiaSessionMessageSchema from "@domain/gaia/gaia-session-message.schema";

export const GaiaSessionMessageModel = model<IGaiaSessionMessage>(
    "gaia-session-message",
    GaiaSessionMessageSchema
);
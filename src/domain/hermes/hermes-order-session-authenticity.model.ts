import { model } from "mongoose";

import { IHermesOrderSessionAuthenticity } from "@domain/hermes/hermes-order-session-authenticity.types";
import HermesOrderSessionAuthenticitySchema from "@domain/hermes/hermes-order-session-authenticity.schema";

export const HermesOrderSessionAuthenticityModel = model<IHermesOrderSessionAuthenticity>(
    "hermes-order-session-authenticity",
    HermesOrderSessionAuthenticitySchema
);
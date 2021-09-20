import { model } from "mongoose";

import { IHermesOrderSessionIntegrity } from "@domain/hermes/hermes-order-session-integrity.types";
import HermesOrderSessionIntegritySchema from "@domain/hermes/hermes-order-session-integrity.schema";

export const HermesOrderSessionIntegrityModel = model<IHermesOrderSessionIntegrity>(
    "hermes-order-session-integrity",
    HermesOrderSessionIntegritySchema
);
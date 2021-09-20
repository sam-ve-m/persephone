import { model } from "mongoose";

import { ICreateElectronicSignatureSession } from "@domain/sphinx/create-electronic-signature-session.types";
import CreateElectronicSignatureSessionSchema from "@domain/sphinx/create-electronic-signature-session.schema";

export const CreateElectronicSignatureSessionModel = model<ICreateElectronicSignatureSession>(
    "create-electronic-signature-session",
    CreateElectronicSignatureSessionSchema
);
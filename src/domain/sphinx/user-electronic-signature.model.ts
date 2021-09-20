import { model } from "mongoose";

import { IUserElectronicSignature } from "@domain/sphinx/user-electronic-signature.types";
import UserElectronicSignatureSchema from "@domain/sphinx/user-electronic-signature.schema";

export const UserElectronicSignatureModel = model<IUserElectronicSignature>(
    "user-electronic-signature",
    UserElectronicSignatureSchema
);
import { model } from "mongoose";

import { IUserChangeOrResetElectronicSignature } from "@domain/sphinx/user-change-or-reset-electronic-signature.types";
import UserChangeOrResetElectronicSignatureSchema from "@domain/sphinx/user-change-or-reset-electronic-signature.schema";

export const UserChangeOrResetElectronicSignatureModel = model<IUserChangeOrResetElectronicSignature>(
    "user-change-or-reset-electronic-signature",
    UserChangeOrResetElectronicSignatureSchema
);
import { model } from "mongoose";

import { IUserSelfie } from "@domain/sphinx/user-selfie.types";
import UserSelfieSchema from "@domain/sphinx/user-selfie.schema";

export const UserSelfieModel = model<IUserSelfie>(
    "user-selfie",
    UserSelfieSchema
);
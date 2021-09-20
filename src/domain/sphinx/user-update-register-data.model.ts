import { model } from "mongoose";

import { IUserUpdateRegisterData } from "@domain/sphinx/user-update-register-data.types";
import UserUpdateRegisterDataSchema from "@domain/sphinx/user-update-register-data.schema";

export const UserUpdateRegisterDataModel = model<IUserUpdateRegisterData>(
    "user-update-register-data",
    UserUpdateRegisterDataSchema
);
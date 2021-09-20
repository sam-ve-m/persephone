import { model } from "mongoose";

import { ISaveUserAuthentication } from "@domain/sphinx/save-user-authentication.types";
import SaveUserAuthenticationSchema from "@domain/sphinx/save-user-authentication.schema";

export const SaveUserAuthenticationModel = model<ISaveUserAuthentication>(
    "save-user-authentication",
    SaveUserAuthenticationSchema
);
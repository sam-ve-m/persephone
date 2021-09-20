import { model } from "mongoose";

import { ISaveUserLogout } from "@domain/sphinx/save-user-logout.types";
import SaveUserLogoutSchema from "@domain/sphinx/save-user-logout.schema";

export const SaveUserLogoutModel = model<ISaveUserLogout>(
    "save-user-logout",
    SaveUserLogoutSchema
);
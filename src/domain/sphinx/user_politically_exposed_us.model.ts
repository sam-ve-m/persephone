import { model } from "mongoose";

import { IUserPoliticallyExposedUS } from "@domain/sphinx/user_politically_exposed_us.types";
import UserPoliticallyExposedUSSchema from "@domain/sphinx/user_politically_exposed_us.schema";

export const UserPoliticallyExposedUSModel = model<IUserPoliticallyExposedUS>(
    "user_politically_exposed_us",
    UserPoliticallyExposedUSSchema
);
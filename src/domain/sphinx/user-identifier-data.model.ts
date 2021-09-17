import { model } from "mongoose";

import { IUserIdentifierData } from "@domain/sphinx/user-identifier-data.types";
import UserIdentifierDataSchema from "@domain/sphinx/user-identifier-data.schema";

export const UserIdentifierDataModel = model<IUserIdentifierData>(
    "user-identifier-data",
    UserIdentifierDataSchema
);
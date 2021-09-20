import { model } from "mongoose";

import { IUserComplementaryData } from "@domain/sphinx/user-complementary-data.types";
import UserComplementaryDataSchema from "@domain/sphinx/user-complementary-data.schema";

export const UserComplementaryDataModel = model<IUserComplementaryData>(
    "user-complementary-data",
    UserComplementaryDataSchema
);
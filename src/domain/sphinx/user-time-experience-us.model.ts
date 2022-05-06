import { model } from "mongoose";

import { IUserTimeExperienceUsData } from "@domain/sphinx/user-time-experience-us.types";
import UserTimeExperienceUsDataSchema from "@domain/sphinx/user-time-experience-us.schema";

export const UserTimeExperienceUsDataModel = model<IUserTimeExperienceUsData>(
    "user-time-experience-us",
    UserTimeExperienceUsDataSchema
);
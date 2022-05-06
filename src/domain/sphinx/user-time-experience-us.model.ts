import { model } from "mongoose";

import { IUserTimeExperienceUsSchemaData } from "@domain/sphinx/user-time-experience-us.types";
import UserTimeExperienceUsSchemaData from "@domain/sphinx/user-time-experience-us.schema";

export const UserTimeExperienceUsSchemaDataModel = model<IUserTimeExperienceUsSchemaData>(
    "user-time-experience-us",
    UserTimeExperienceUsSchemaData
);
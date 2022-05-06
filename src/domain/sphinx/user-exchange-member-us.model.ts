import { model } from "mongoose";

import { IUserExchangeMemberUsSchemaData } from "@domain/sphinx/user-exchange-member-us.types";
import UserExchangeMemberUsSchemaData from "@domain/sphinx/user-exchange-member-us.schema";

export const UserExchangeMemberUsSchemaDataModel = model<IUserExchangeMemberUsSchemaData>(
    "user-exchange-member-us",
    UserExchangeMemberUsSchemaData
);
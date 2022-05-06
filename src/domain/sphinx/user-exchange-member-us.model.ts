import { model } from "mongoose";

import { IUserExchangeMemberUsData } from "@domain/sphinx/user-exchange-member-us.types";
import UserExchangeMemberUsSchema from "@domain/sphinx/user-exchange-member-us.schema";

export const UserExchangeMemberUsDataModel = model<IUserExchangeMemberUsData>(
    "user-exchange-member-us",
    UserExchangeMemberUsSchema
);
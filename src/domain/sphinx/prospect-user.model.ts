import { model } from "mongoose";

import { IProspectUser } from "@domain/sphinx/prospect-user.types";
import ProspectUserSchema from "@domain/sphinx/prospect-user.schema";

export const ProspectUserModel = model<IProspectUser>(
    "prospect-user",
    ProspectUserSchema
);
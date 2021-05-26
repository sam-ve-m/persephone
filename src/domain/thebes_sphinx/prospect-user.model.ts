import { model } from "mongoose";

import { IProspectUser } from "@domain/thebes_sphinx/prospect-user.types";
import ProspectUserSchema from "./prospect-user.schema";

export const ProspectUserModel = model<IProspectUser>(
  "prospect-user",
  ProspectUserSchema
);

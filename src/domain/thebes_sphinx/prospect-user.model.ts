import { model } from "mongoose";

import { IProspectUser } from "@domain/thebes_sphinx/prospect-user.types";
import ProspectUserSchema from "@domain/thebes_sphinx/prospect-user.schema";

export const ProspectUserModel = model<IProspectUser>(
  "prospect-user",
  ProspectUserSchema
);

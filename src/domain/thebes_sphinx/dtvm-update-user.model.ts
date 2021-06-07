import { model } from "mongoose";

import { IDtvmUpdateUser } from "@domain/thebes_sphinx/dtvm-update-user.types";
import DtvmUpdateUserSchema from "@domain/thebes_sphinx/dtvm-update-user.schema";

export const DtvmUpdateUserModel = model<IDtvmUpdateUser>(
  "dtvm-update-user",
  DtvmUpdateUserSchema
);

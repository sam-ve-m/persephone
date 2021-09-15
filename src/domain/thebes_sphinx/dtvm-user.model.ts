import { model } from "mongoose";

import { IDtvmUser } from "@domain/thebes_sphinx/dtvm-user.types";
import DtvmUserSchema from "@domain/thebes_sphinx/dtvm-user.schema";

export const DtvmUserModel = model<IDtvmUser>("dtvm-user", DtvmUserSchema);

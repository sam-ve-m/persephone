import { model } from "mongoose";

import { ISaveUserThebesHall } from "@domain/sphinx/save-user-thebes-hall.types";
import SaveUserThebesHallSchema from "@domain/sphinx/save-user-thebes-hall.schema";

export const SaveUserThebesHallModel = model<ISaveUserThebesHall>(
    "save-user-thebes-hall",
    SaveUserThebesHallSchema
);
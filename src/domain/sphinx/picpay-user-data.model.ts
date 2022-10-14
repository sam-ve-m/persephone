import { model } from "mongoose";

import { IPicpayUserData } from "@domain/sphinx/picpay-user-data.types";
import PicpayUserDataSchema from "@domain/sphinx/picpay-user-data.schema";

export const PicpayUserDataModel = model<IPicpayUserData>(
    "picpay-user-data",
    PicpayUserDataSchema
);
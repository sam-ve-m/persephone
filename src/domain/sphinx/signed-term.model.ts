import { model } from "mongoose";

import { ISignedTerm } from "@domain/sphinx/signed-term.types";
import SignedTermSchema from "@domain/sphinx/signed-term.schema";

export const SignedTermModel = model<ISignedTerm>(
    "signed-term",
    SignedTermSchema
);
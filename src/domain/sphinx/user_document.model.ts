import { model } from "mongoose";

import { IUserDocument } from "@domain/sphinx/user_document.types";
import UserDocumentSchema from "@domain/sphinx/user_document.schema";

export const UserDocumentModel = model<IUserDocument>(
    "user_document",
    UserDocumentSchema
);
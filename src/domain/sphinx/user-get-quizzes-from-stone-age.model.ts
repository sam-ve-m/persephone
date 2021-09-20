import { model } from "mongoose";

import { IUserGetQuizzesFromStoneAge } from "@domain/sphinx/user-get-quizzes-from-stone-age.types";
import UserGetQuizzesFromStoneAgeSchema from "@domain/sphinx/user-get-quizzes-from-stone-age.schema";

export const UserGetQuizzesFromStoneAgeModel = model<IUserGetQuizzesFromStoneAge>(
    "user-get-quizzes-from-stone-age",
    UserGetQuizzesFromStoneAgeSchema
);
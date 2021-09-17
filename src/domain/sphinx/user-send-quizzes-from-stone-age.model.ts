import { model } from "mongoose";

import { IUserSendQuizzesFromStoneAge } from "@domain/sphinx/user-send-quizzes-from-stone-age.types";
import UserSendQuizzesFromStoneAgeSchema from "@domain/sphinx/user-send-quizzes-from-stone-age.schema";

export const UserSendQuizzesFromStoneAgeModel = model<IUserSendQuizzesFromStoneAge>(
    "user-send-quizzes-from-stone-age",
    UserSendQuizzesFromStoneAgeSchema
);
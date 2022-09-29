import { model } from "mongoose";

import { IScoreValidation } from "@domain/sphinx/score_validation.types";
import ScoreValidationSchema from "@domain/sphinx/score_validation.schema";

export const ScoreValidationModel = model<IScoreValidation>(
    "score_validation",
    ScoreValidationSchema
);
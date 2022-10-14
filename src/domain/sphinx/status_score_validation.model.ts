import { model } from "mongoose";

import { IScoreValidationStatus } from "@domain/sphinx/status_score_validation.types";
import ScoreValidationStatusSchema from "@domain/sphinx/status_score_validation.schema";

export const ScoreValidationStatusModel = model<IScoreValidationStatus>(
    "score_validation_status",
    ScoreValidationStatusSchema
);
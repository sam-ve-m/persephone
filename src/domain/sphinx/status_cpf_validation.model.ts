import { model } from "mongoose";

import { ICpfValidationStatus } from "@domain/sphinx/status_cpf_validation.types";
import CpfValidationStatusSchema from "@domain/sphinx/status_cpf_validation.schema";

export const CpfValidationStatusModel = model<ICpfValidationStatus>(
    "cpf_validation_status",
    CpfValidationStatusSchema
);
import { model } from "mongoose";

import { ICpfValidation } from "@domain/sphinx/cpf_validation.types";
import CpfValidationSchema from "@domain/sphinx/cpf_validation.schema";

export const CpfValidationModel = model<ICpfValidation>(
    "cpf_validation",
    CpfValidationSchema
);
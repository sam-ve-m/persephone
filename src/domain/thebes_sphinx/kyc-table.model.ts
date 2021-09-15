import { model } from "mongoose";

import { IKycTable } from "@domain/thebes_sphinx/kyc-table.types";
import KycTableSchema from "@domain/thebes_sphinx/kyc-table.schema";

export const KycTableModel = model<IKycTable>("kyc-table", KycTableSchema);

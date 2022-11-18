import { model } from "mongoose";

import { ICashFlowWithdrawToExternalBank } from "@domain/ebisu/cash_flow_withdraw_to_external_bank.types";
import CashFlowWithdrawToExternalBankSchema from "@domain/ebisu/cash_flow_withdraw_to_external_bank.schema";

export const CashFlowWithdrawToExternalBankModel = model<ICashFlowWithdrawToExternalBank>(
    "cash_flow_withdraw_to_external_bank",
    CashFlowWithdrawToExternalBankSchema
);
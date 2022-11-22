import { model } from "mongoose";

import { IExchangeProposalExecution } from "@domain/ebisu/exchange_proposal_execution.types";
import ExchangeProposalExecutionSchema from "@domain/ebisu/exchange_proposal_execution.schema";

export const ExchangeProposalExecutionModel = model<IExchangeProposalExecution>(
    "exchange_proposal_execution",
    ExchangeProposalExecutionSchema
);
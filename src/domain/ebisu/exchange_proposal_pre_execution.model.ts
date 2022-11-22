import { model } from "mongoose";

import { IExchangeProposalPreExecution } from "@domain/ebisu/exchange_proposal_pre_execution.types";
import ExchangeProposalPreExecutionSchema from "@domain/ebisu/exchange_proposal_pre_execution.schema";

export const ExchangeProposalPreExecutionModel = model<IExchangeProposalPreExecution>(
    "exchange_proposal_pre_execution",
    ExchangeProposalPreExecutionSchema
);
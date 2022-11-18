import { model } from "mongoose";

import { IExchangeProposalSimulation } from "@domain/ebisu/exchange_proposal_simulation.types";
import ExchangeProposalSimulationSchema from "@domain/ebisu/exchange_proposal_simulation.schema";

export const ExchangeProposalSimulationModel = model<IExchangeProposalSimulation>(
    "exchange_proposal_simulation",
    ExchangeProposalSimulationSchema
);
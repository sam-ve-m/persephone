import { Document, Model } from "mongoose";

export interface IExchangeProposalSimulation { 
    unique_id: String;
    device_id: String;
    device_info: Object;
    proposal_data: Object;
 }

export interface IExchangeProposalSimulationDocument extends IExchangeProposalSimulation, Document {}
export interface IExchangeProposalSimulationModel extends Model<IExchangeProposalSimulationDocument> {}
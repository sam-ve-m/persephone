import { Document, Model } from "mongoose";

export interface IExchangeProposalExecution { 
    unique_id: String;
    device_id: String;
    device_info: Object;
    origin_account_number: String;
    origin_country: String;
    destination_account_number: String;
    destination_country: String;
    exchange_proposal_value: String;
    balance_country: String;
    operation_type: String;
    next_d2: Number;
    token: String;
    execution_report: Object;
    created_at: Number;
 }

export interface IExchangeProposalExecutionDocument extends IExchangeProposalExecution, Document {}
export interface IExchangeProposalExecutionModel extends Model<IExchangeProposalExecutionDocument> {}
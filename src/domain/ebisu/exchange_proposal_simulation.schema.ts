import { Schema } from "mongoose";

const ExchangeProposalSimulationSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    proposal_data: Object
 });

export default ExchangeProposalSimulationSchema;
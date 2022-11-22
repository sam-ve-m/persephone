import { Schema } from "mongoose";

const CashFlowWithdrawToExternalBankSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    origin_account: Object,
    account_destination: Object,
    value: Number
 });

export default CashFlowWithdrawToExternalBankSchema;
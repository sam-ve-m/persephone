import { Schema } from "mongoose";

const HermesReportOrderSchema = new Schema({
    ip: String,
    cl_order_id: String,
    jwt: String,
    report: Object,
    created_at: Number
});

export default HermesReportOrderSchema;
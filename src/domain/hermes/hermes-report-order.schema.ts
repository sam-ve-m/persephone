import { Schema } from "mongoose";

const HermesReportOrderSchema = new Schema({
    ip: String,
    device_id: String,
    device_info: Object,
    cl_order_id: String,
    jwt: String,
    report: Object,
    created_at: Number
});

export default HermesReportOrderSchema;
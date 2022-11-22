import { Schema } from "mongoose";

const HermesSentOrderSchema = new Schema({
     sent_order: Object,
     device_id: String,
     device_info: Object,
     cl_order_id: String,
     created_at: Number
});

export default HermesSentOrderSchema;
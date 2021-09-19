import { Schema } from "mongoose";

const HermesSentOrderSchema = new Schema({
     sent_order: Object,
     cl_order_id: String,
     created_at: Number
});

export default HermesSentOrderSchema;
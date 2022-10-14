import { Schema } from "mongoose";

const PicpayUserDataSchema = new Schema({
    unique_id: String,
    fields: Object,
    created_at: Number
});

export default PicpayUserDataSchema;
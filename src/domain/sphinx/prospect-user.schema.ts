import { Schema } from "mongoose";

const ProspectUserSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    nick_name: String,
    created_at: Number
});

export default ProspectUserSchema;
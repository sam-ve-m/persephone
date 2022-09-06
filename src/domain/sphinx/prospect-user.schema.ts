import { Schema } from "mongoose";

const ProspectUserSchema = new Schema({
    unique_id: String,
    nick_name: String,
    created_at: Number
});

export default ProspectUserSchema;
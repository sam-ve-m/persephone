import { Schema } from "mongoose";

const HermesOrderSessionIntegritySchema = new Schema({
     ip: String,
     device_id: String,
     device_info: Object,
     jwt: String,
     is_integrity: Boolean,
     jwt_missing_fields: Array,
     connection_unique_id: String,
     created_at: Number
});

export default HermesOrderSessionIntegritySchema;
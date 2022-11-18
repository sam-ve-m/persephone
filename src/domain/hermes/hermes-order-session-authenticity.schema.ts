import { Schema } from "mongoose";

const HermesOrderSessionAuthenticitySchema = new Schema({
  ip: String,
  device_id: String,
  device_info: Object,
  jwt: String,
  is_authentic: Boolean,
  connection_unique_id: String,
  created_at: Number,
});

export default HermesOrderSessionAuthenticitySchema;

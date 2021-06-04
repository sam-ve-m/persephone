import { Schema } from "mongoose";

const ProspectUserSchema = new Schema({
  display_name: String,
  user_email: String,
  create_user_time_stamp: Number,
  date_of_entry: {
    type: Date,
    default: new Date(),
  },
  last_updated: {
    type: Date,
    default: new Date(),
  },
});

export default ProspectUserSchema;

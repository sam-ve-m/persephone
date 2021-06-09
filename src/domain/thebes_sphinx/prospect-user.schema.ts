import { Schema } from "mongoose";

const ProspectUserSchema = new Schema({
  display_name: {
    type: String,
  },
  user_email: {
    type: String,
  },
  create_user_time_stamp: {
    type: String,
  },
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

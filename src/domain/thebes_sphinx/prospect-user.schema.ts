import { Schema } from "mongoose";

const ProspectUserSchema = new Schema({
  displayName: String,
  userEmail: String,
  createUserTimeStamp: Number,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

export default ProspectUserSchema;

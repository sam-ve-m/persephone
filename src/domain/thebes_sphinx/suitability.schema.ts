import { Schema } from "mongoose";

const SuitabilitySchema = new Schema({
  metadata: {
    user_email: String,
  },
  form: [
    {
      question_id: Number,
      answer: String,
    },
  ],
  version: Number,
  score: Number,
  profile: String,
  create_suitability_timestamp: Number,
});

export default SuitabilitySchema;

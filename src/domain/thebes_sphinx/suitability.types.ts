import { Document, Model } from "mongoose";

export interface ISuitability {
  metadata: {
    user_email: String;
  };
  form: [
    {
      question_id: Number;
      answer: String;
    }
  ];
  version: Number;
  score: Number;
  profile: String;
  create_suitability_time_stamp: Number;
  digital_signature_time_stamp: Number;
}

export interface ISuitabilityDocument extends ISuitability, Document {}
export interface ISuitabilityModel extends Model<ISuitabilityDocument> {}

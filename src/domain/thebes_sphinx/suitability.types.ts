import { Document, Model } from "mongoose";

export interface ISuitability {
  metadata: {
    user_email: string;
  };
  form: [
    {
      question_id: number;
      answer: string;
    }
  ];
  version: number;
  score: number;
  profile: string;
  create_suitability_timestamp: number;
}

export interface ISuitabilityDocument extends ISuitability, Document {}
export interface ISuitabilityModel extends Model<ISuitabilityDocument> {}

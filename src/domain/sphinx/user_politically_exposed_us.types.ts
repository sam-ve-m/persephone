import { Document, Model } from "mongoose";

export interface IUserPoliticallyExposedUS {
    politically_exposed: Boolean;
    unique_id: String;
    created_at: Number;
}

export interface IUserPoliticallyExposedUSDocument extends IUserPoliticallyExposedUS, Document {}
export interface IUserPoliticallyExposedUSModel extends Model<IUserPoliticallyExposedUSDocument> {}
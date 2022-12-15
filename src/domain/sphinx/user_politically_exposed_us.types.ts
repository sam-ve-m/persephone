import { Document, Model } from "mongoose";

export interface IUserPoliticallyExposedUS {
    unique_id: String;
    device_id: String;
    device_info: Object;
    politically_exposed: Boolean;
    politically_exposed_names: Array<String>;
    created_at: Number;
}

export interface IUserPoliticallyExposedUSDocument extends IUserPoliticallyExposedUS, Document {}
export interface IUserPoliticallyExposedUSModel extends Model<IUserPoliticallyExposedUSDocument> {}
import { Document, Model } from "mongoose";

export interface ISaveUserThebesHall {
    unique_id: String;
    jwt: String;
    jwt_payload_data: Object;
    device_information: Object,
    created_at: Number;
}

export interface ISaveUserThebesHallDocument extends ISaveUserThebesHall, Document {}
export interface ISaveUserThebesHallModel extends Model<ISaveUserThebesHallDocument> {}
import { Document, Model } from "mongoose";

export interface ISaveUserThebesHall {
    user_email: String;
    jwt: Object;
    has_trade_allowed: Object;
    created_at: Number;
}

export interface ISaveUserThebesHallDocument extends ISaveUserThebesHall, Document {}
export interface ISaveUserThebesHallModel extends Model<ISaveUserThebesHallDocument> {}
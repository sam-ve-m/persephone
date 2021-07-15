
import { Document, Model } from "mongoose";

interface IExecutionReportJson {
    msgType: string;
    avgPx:  number;
    cumQty:  number;
    execID: string;
    execType: string;
    leavesQty: number;
    orderID: string;
    orderQty: number;
    ordStatus: string;
    ordType: string;
    side: string;
    symbol: string;
    clOrdID: string;
    lastPx:  number;
    lastQty: number;
    origCIOrdID: string;
    transactTime: string;
}

export interface IExecutionReport {
    json: IExecutionReportJson;
    fix: string;
}

export interface IExecutionReportDocument extends IExecutionReport, Document {}
export interface IExecutionReportModel extends Model<IExecutionReportDocument> {}


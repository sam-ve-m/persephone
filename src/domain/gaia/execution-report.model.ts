import { model } from "mongoose";
      
import { IExecutionReport } from "@domain/gaia/execution-report.types";
import ExecutionReportSchema from "@domain/gaia/execution-report.schema";
      
export const ExecutionReportModel = model<IExecutionReport>(
    "execution-report",
    ExecutionReportSchema
);
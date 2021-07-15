import { model } from "mongoose";
      
import { IExecutionReport } from "@domain/gaia/executionReport.types";
import ExecutionReportSchema from "@domain/gaia/executionReport.schema";
      
export const ExecutionReportModel = model<IExecutionReport>(
    "executionReport",
    ExecutionReportSchema
);
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

import { NextFunction, Request, Response } from "express";

const globalErrorHandler=(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
):void => {
  const statusCode = 500;
  const message = err.message || "Something went wrong";
 res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;

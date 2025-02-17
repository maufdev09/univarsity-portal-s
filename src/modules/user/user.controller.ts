import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";

const createStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, student: studentData } = req.body;

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student created successfully",
      data: result,
    });
  }
);

export const UserController = {
  createStudent,
};

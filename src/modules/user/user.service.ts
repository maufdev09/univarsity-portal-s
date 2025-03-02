import { AcademicSemester } from "./../academicSemester/academicSemester.model";
import config from "../../config";
import { TStudent } from "../stuedent/student.interface";
import { Student } from "../stuedent/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generatestudentID } from "./user.utils";

const createStudentIntoDB = async (pasword: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = pasword || (config.default_password as string);

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester
  );

  userData.id = await generatestudentID(admissionSemester);

  userData.role = "student";
  userData.admissionSemester = payload.admissionSemester


  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    // await User.findByIdAndUpdate;

    payload.id = newUser.id;
    payload.user = newUser._id; //reference _id

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};

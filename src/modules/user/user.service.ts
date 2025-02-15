import config from "../../config";
import { TStudent } from "../stuedent/student.interface";
import { Student } from "../stuedent/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (pasword: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = pasword || (config.default_password as string);
  userData.id = "2030100001";
  userData.role = "student";

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    await User.findByIdAndUpdate;

    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};

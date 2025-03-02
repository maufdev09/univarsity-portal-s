import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

const findLastStudentId = async (payLoad:string) => {
  const lastStudent = await User.findOne(
    {
      role: "student",
      admissionSemester:payLoad
    },


    {
      id: 1,
      _id: 0,
    }
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};




export const generatestudentID = async (payLoad: Partial<TAcademicSemester>) => {
  const currentId = (await findLastStudentId(payLoad._id)) || 0;
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;

  return incrementId;
};

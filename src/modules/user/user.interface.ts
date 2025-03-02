import { Types } from "mongoose";

export type TUser={
id:string;
password:string;
needsPasswordChange:boolean;
admissionSemester: Types.ObjectId;
role:"admin"|"student"|"faculty"
status:'in-progress'|'blocked';
isDeleted:boolean


}
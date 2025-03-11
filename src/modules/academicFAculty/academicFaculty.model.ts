import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema= new Schema<TAcademicFaculty>({

    name:{
        type: String,
        required: true,
        unique: true,
        trim: true,
       message: 'Name should only contain alphabetic characters and spaces.'
    }
},
{
    timestamps: true,

}

)

export  const AcademicFaculty=model<TAcademicFaculty>("AcademicFaculty",academicFacultySchema)
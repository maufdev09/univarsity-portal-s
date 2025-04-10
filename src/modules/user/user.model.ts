import bcrypt from 'bcrypt';
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  id: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  needsPasswordChange: { type: Boolean, default: true },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: "AcademicSemester",
    required: [true, "Admission semester is required"],
  },
  role: { type: String, enum: ["admin", "student", "faculty"], required: true },

  status: {
    type: String,
    enum: ["in-progress", "blocked"],
    required: true,
    default: "in-progress",
  },

  isDeleted: { type: Boolean, default: false },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  next();
});



userSchema.post("save", async function (doc, next) {

doc.password = " "
next()

})


export const User=model<TUser>("User", userSchema);
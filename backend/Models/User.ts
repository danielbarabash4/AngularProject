import mongoose, { Document, Schema, model } from "mongoose";

export interface IUserModel extends Document {
  name: string;
  age: number;
  job: string;
}

const UserSchema = new Schema<IUserModel>({
  name: {
    type: String,
    required: [true, "missing name"],
    minlength: [3,"name too short"],
    maxlength: [255,"name too long"],
    unique: true
  },
  age: {
    type: Number,
    required: [true, "missing age"],
    minlength: [1,"age too short"],
    maxlength: [3, "age too long"],
  },
  job: Array,
});

export const UserModel = model<IUserModel>("users", UserSchema);

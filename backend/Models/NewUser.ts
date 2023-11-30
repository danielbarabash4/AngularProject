import mongoose, { Document, Schema, model } from "mongoose";

export interface INewUserModel extends Document {
  name: string;
  age: number;
}

const NewUserSchema = new mongoose.Schema<INewUserModel>({
  name: {
    type: String,
    minlength: [3, "name too short"],
    maxlength: [255, "name too long"],
    trim: true,
    unique: false,
  },

  age: {
    type: Number,
    minlength: [1, "age too short"],
    maxlength: [3, "age too long"],
  },
});

const TestUserSchema = new Schema<INewUserModel>()

export const NewUserModel = model<INewUserModel>("users", NewUserSchema);

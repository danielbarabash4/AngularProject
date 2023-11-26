import { Document, Schema, model } from "mongoose";

export interface IBookModel extends Document {
  //don't specify the _id here !!!!!
  title: String;
  author:String;
  pages: Number;
  genres: Schema.Types.ObjectId;
  rating: Number;
}

const BookSchema = new Schema<IBookModel>({
  title: {
    type: String,
    required: [true, "missing title name"],
    minLength: [3, "title too short"],
    maxLength: [100, "title too long"],
    trim: true,
    unique: false,
  },

  author: {
    type: String,
    required: [true, "missing author name"],
    minLength: [3, "author too short"],
    maxLength: [100, "author too long"],
    trim: true,
    unique: false,
  },

  pages: {
    type: String,
    required: [true, "missing title name"],
    minLength: [0, "title too short"],
    maxLength: [100, "title too long"],
    trim: true,
    unique: false,
  },

  genres: {
    type: Schema.Types.ObjectId,
  },

  rating: {
    type: String,
    required: [true, "missing title name"],
    minLength: [3, "title too short"],
    maxLength: [100, "title too long"],
    trim: true,
    unique: false,
  },
}) 

export const BookModel = model<IBookModel>("BookModel", BookSchema, "songs");
import { Document, Schema, model } from "mongoose";
import { CatModel } from "./CatMongo";

// 1.model interface describing the data in the model
export interface ISongModel extends Document {
  //don't specify the _id here !!!!!

  url: string;
  title: string;
  SongImg: string;
  category: Schema.Types.ObjectId;
  videoFile: string;
}

//2. model schema describing validation, constrains and more:

const SongSchema = new Schema<ISongModel>(
  {
    url: {
      type: String,
      required: [true, "missing url address"],
      minLength: [3, "url too short"],
      maxLength: [255, "url too long"],
      trim: true,
      unique: true,
    },

    title: {
      type: String,
      required: [true, "missing title name"],
      minLength: [3, "title too short"],
      maxLength: [100, "title too long"],
      trim: true,
      unique: false,
    },

    SongImg: {
      type: String,
      required: [true, "missing song name"],
      minLength: [3, "song image too short"],
      maxLength: [255, "song image too long"],
      trim: true,
      unique: false,
    },

    videoFile: {
      type: String,
      required: [true, "missing song name"],
      minLength: [3, "video file too short"],
      maxLength: [255, "video file too long"],
      trim: true,
      unique: true,
    },

    category: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    versionKey: false, //do not create _v field for versioning
    toJSON: { virtuals: true }, //when converting db to json - allow bring virtual fields
    //id:false // do not duplicate _id into id field
  }
);

SongSchema.virtual("categoryName", {
  ref: CatModel, //which model are you describing
  localField: "category", //which field in our model is it
  foreignField: "_id", // which field on category model is it
  justOne: true, // category is a single object and not an array
});

export const SongModel = model<ISongModel>("SongModel", SongSchema, "songs");

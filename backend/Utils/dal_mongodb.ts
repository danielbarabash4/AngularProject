import mongoose from "mongoose";
import config from "./Config";

//create a connection to mongoDB

const connectMongo = async (): Promise<void> => {
  try {
    const db = await mongoose.connect(config.connectionString);
    console.log("connected to mongoDB");
  } catch (err: any) {
    console.log("error in connection:\n", err);
  }
};

export default {connectMongo};
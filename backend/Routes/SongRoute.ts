import express, { NextFunction, Request, Response } from "express";
import { addUser, getUser } from "../Logic/SongMongoLogic";
import dal_mongodb from "../Utils/dal_mongodb";

const songRouter = express.Router();

songRouter.get(
  "/getUser",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("in song route");
    const db = await dal_mongodb.connectMongo();
    return response.status(200).json(await getUser());
  }
);

songRouter.post(
  "/addUser",
  async (request: Request, response: Response, next: NextFunction) => {
    const newUser = request.body;
    await dal_mongodb.connectMongo();
    console.log("added user");
    return response.status(201).json(await addUser(newUser));
  }
);

export default songRouter;

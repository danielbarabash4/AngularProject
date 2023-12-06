import { UserModel } from './../Models/User';
import express, { NextFunction, Request, Response } from "express";
import dal_mongodb from "../Utils/dal_mongodb";
import { getUser } from "../Logic/UserLogic";

const UserRouter = express.Router();

UserRouter.get(
  "/getAllUsers",
  async (request: Request, response: Response, next: NextFunction) => {
    const db = await dal_mongodb.connectMongo();
    return response.status(200).json(await getUser());
  }
);

export default UserRouter;

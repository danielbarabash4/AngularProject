import express, { NextFunction, Request, Response } from "express";
import {
  addSong,
  deleteSongById,
  getAllSongs,
  getCat,
  getSongById,
  updateSong,
} from "../Logic/SongsLogic";
import { addUser, getAllSongsMongo, getBook, getUser } from "../Logic/SongMongoLogic";
import mongoose from "mongoose";
import config from "../Utils/Config";
import { BookModel } from "../Models/BookModel";
import dal_mongodb from "../Utils/dal_mongodb";

const songRouter = express.Router();

songRouter.get(
  "/listSongs",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("in song route");
    return response.status(200).json(await getAllSongs());
  }
);

songRouter.get(
  "/getBook",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("in song route");
    const db = await dal_mongodb.connectMongo();
    return response.status(200).json(await getBook());
  }
);

songRouter.get(
  "/songsMongo",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("in song route");
    const db = await dal_mongodb.connectMongo();
    return response.status(200).json(await getAllSongsMongo());
  }
);

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
    return response.status(201).json(await addUser(newUser));
    console.log("added user");
  }
);

songRouter.get(
  "/songById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    //const songID = +request.params.id;
    return response.status(200).json(await getSongById(+request.params.id));
  }
);

songRouter.delete(
  "/deleteById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const songID = +request.params.id;
    await deleteSongById(songID);
    return response.status(200).json({});
  }
);

songRouter.post(
  "/addSong",
  async (request: Request, response: Response, next: NextFunction) => {
    const newSong = request.body;
    const result = await addSong(newSong);
    return response.status(201).json(`{${result}}`);
  }
);

songRouter.put(
  "/updateSong",
  async (request: Request, response: Response, next: NextFunction) => {
    const song = request.body;
    return response.status(200).json(await updateSong(song));
  }
);

songRouter.get(
  "/getCat",
  async (request: Request, response: Response, next: NextFunction) => {
    return response.status(200).json(await getCat());
  }
);

export default songRouter;

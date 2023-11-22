import express, { NextFunction, Request, Response } from "express";
import { Test } from "./Test";
import { sendBAD, sendOK } from "../Logic/TestLogic";

const router = express.Router();

router.get(
  "/checkOk",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(sendOK("get"));
  }
);

router.get(
  "/checkBad",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(sendBAD("get"));
  }
);

router.post(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(sendOK("post", request.body));
  }
);

router.post(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(sendBAD("post"));
  }
);

router.put(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(sendOK("put"));
  }
);

router.put(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(sendBAD("put"));
  }
);

router.delete(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(sendOK("delete"));
  }
);

router.delete(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(sendBAD("delete"));
  }
);

export default router;

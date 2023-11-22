import fileUpload from "express-fileupload";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import config from "./Utils/Config";
import ErrorHandler from "./MiddleWare/route-not-found";
import router from "./Routes/SImpleRouter";
import carRouter from "./Routes/carRouter";
import songRouter from "./Routes/SongRoute";

const server = express();

server.use(cors());

server.use(express.json());

server.use(express.static("upload"));

server.use(fileUpload({ createParentPath: true }));

server.use("/api/v1/test/", router);
server.use("/api/v1/car", carRouter);
server.use("/api/v1/songs", songRouter);

server.use("*", ErrorHandler);

server.listen(config.webPort, () => {
  console.log(`listening on http://${config.webPort}`);
  console.log(
    `for testing use the path http://localhost:${config.webPort}/api/v1/test/checkOK`
  );
  console.log(
    `for testing use the path http://localhost:${config.webPort}/api/v1/test/checkBAD`
  );
});

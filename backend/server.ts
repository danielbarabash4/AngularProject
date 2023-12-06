import fileUpload from "express-fileupload";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import config from "./Utils/Config";
import ErrorHandler from "./MiddleWare/route-not-found";
import songRouter from "./Routes/SongRoute";
import UserRouter from "./Routes/UserRouter";


const server = express();

server.use(cors());

server.use(express.json());

server.use(express.static("upload"));

server.use(fileUpload({ createParentPath: true }));

server.use("/api/v1/songs", songRouter);
server.use("/api/v1/users", UserRouter);


server.use("*", ErrorHandler);

server.listen(config.webPort, () => {
  console.log(`listening on http://${config.webPort}`);
});

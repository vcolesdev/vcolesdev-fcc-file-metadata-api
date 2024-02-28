import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import getRoutes from "./routes";
import serverMsg from "./serverMsg";
import getApiRoutes from "./routes/api";

dotenv.config();

/* Config */

const appPort = process.env.PORT || 3000;
const corsOptions = {optionsSuccessStatus: 200};

/* Initialize App */

export const app = express();

/* Middleware */

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

/* Routes */

getRoutes(app);
getApiRoutes(app);

// Start server
const listener = app.listen(appPort, () => serverMsg.listener);
listener.on("error", (error) => serverMsg.error(error));

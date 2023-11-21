import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import appRoutes from "./routes/router-index.js";
import { initializeApp } from "./app-initializer.js";

dotenv.config();

const application_port = process.env.port;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", appRoutes);

//initialize server
app.listen(application_port, initializeApp);

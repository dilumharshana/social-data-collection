import express from "express";
import facebookRoutes from "./routes/router-index.js";

const app = express();

app.use("/", facebookRoutes);

app.listen(4000, console.log("app started"));


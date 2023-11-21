import express from "express";
import appRoutes from "./routes/router-index.js";

const app = express();

app.use("/", appRoutes);

app.listen(4000, console.log("app started"));


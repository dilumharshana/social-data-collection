import express from "express";
import itemRoutes from "./itemRoutes.js";

const routes = express.Router();

routes.use("/items", itemRoutes);

export default routes;

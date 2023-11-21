import express from "express";
import facebookRoutes from "./facebook-routes.js";
import linkedInRoutes from "./linkedin-routes.js";

const routes = express.Router();

routes.use("/facebook", facebookRoutes);
routes.use("/linkedIn", linkedInRoutes);

export default routes;

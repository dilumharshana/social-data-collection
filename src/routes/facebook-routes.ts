import express from "express";
import { facebook_data_loader } from "../services/facebook-data-loader.js";

const router = express.Router();

router.get(
  "/user/:userId",
  async (req, res) => await facebook_data_loader(req, res)
);

export default router;

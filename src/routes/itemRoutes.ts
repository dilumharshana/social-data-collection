import express from "express";
import { addItems } from "../services/item_services.js";

const router = express.Router();

router.post(
  "/add-item",
  async (req, res) => await addItems(req, res)
);

export default router;

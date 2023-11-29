import express from "express";
import {
  addItems,
  getItem,
  getItems,
  updateItem
} from "../services/item_services.js";

const router = express.Router();

router.get("/", async (req, res) => await getItems(req, res));

router.get("/:id", async (req, res) => await getItem(req, res));

router.post("/add-item", async (req, res) => await addItems(req, res));

router.put("/", async (req, res) => await updateItem(req, res));

export default router;

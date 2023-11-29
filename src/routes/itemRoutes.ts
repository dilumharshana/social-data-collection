import express from "express";
import {
  addItem,
  addItems,
  deleteItem,
  deleteItems,
  getItem,
  getItems,
  updateItem,
  updateItems
} from "../services/item_services.js";

const router = express.Router();

router.get("/", async (req, res) => await getItems(req, res));
router.get("/:id", async (req, res) => await getItem(req, res));

router.post("/", async (req, res) => await addItem(req, res));
router.post("/items", async (req, res) => await addItems(req, res));

router.put("/", async (req, res) => await updateItem(req, res));
router.put("/items", async (req, res) => await updateItems(req, res));

router.delete("/:id", async (req, res) => await deleteItem(req, res));
router.delete("/", async (req, res) => await deleteItems(req, res));

export default router;

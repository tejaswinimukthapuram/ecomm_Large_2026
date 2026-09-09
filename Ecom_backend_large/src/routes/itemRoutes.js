import express from "express";
import dotenv from "dotenv";
import itemsController from "../controllers/itemsController.js";

dotenv.config();

const router = express.Router();

router.get("/items", itemsController.getItems);
router.post("/items", itemsController.createItem);
router.put("/items/:id", itemsController.updateItem);

export default router;
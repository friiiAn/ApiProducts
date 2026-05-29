import productControllers from "../controllers/products.controller.js";
import { Router } from "express";

const router = Router();

// GET ALL
router.get("/getAll", productControllers.getAll);

// GET ONE
router.get("/getOne/:barcode", productControllers.getOne);

// INSERT
router.post("/insertOne", productControllers.insertOne);

// DELETE
router.delete("/deleteOne/:barcode", productControllers.deleteOne);

// UPDATE
router.put("/updateOne/:barcode", productControllers.updateOne);

export default router;
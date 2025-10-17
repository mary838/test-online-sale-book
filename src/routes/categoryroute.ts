import express from "express";
import { addCategory } from "../controller/categorycontroller";

const router = express.Router();

// POST /api/category -> add new category
router.post("/", addCategory);

export default router;

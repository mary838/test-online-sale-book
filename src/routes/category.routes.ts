import express from "express";
import { addCategory } from "../controller/category.controller";
const router = express.Router();
router.post("/", addCategory);
export default router;

import express from "express";
import { createBook } from "../controller/bookController";

const router = express.Router();

router.post("/create-book", createBook);

export default router;

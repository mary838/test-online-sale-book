import { Request, Response } from "express";
import Category from "../model/categorymodel";

export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    // Validate input
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name and description are required" });
    }

    // Create new category
    const category = new Category({ name, description });
    await category.save();

    return res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};

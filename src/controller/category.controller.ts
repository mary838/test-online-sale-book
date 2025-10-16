import { Request, Response } from "express";
import * as categoryService from "../service/category.service";
export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Category name is required   " });
    }
    const newCategory = await categoryService.createCategory({
      name,
      description,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    res
      .status(500)
      .json({ message: "Fail to create category", error: errorMessage });
  }
};

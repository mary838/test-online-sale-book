import Category, { Icategory } from "../model/category.model";
export const createCategory = async (data: {
  name: string;
  description?: string;
}): Promise<Icategory> => {
  const category = new Category(data);
  return await category.save();
};

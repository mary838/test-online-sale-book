import mongoose, { Schema, Document } from "mongoose";
export interface Icategory extends Document {
  name: string;
  description?: string;
  createdAt: Date;
}
const categorySchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);
export default mongoose.model<Icategory>("Category", categorySchema);

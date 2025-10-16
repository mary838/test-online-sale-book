import dotenv from "dotenv";

dotenv.config();

export const environment = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://thoeunmary_db_user:B1aItzxIW4vO1VOT@cluster0.qem1fg8.mongodb.net/",
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
  NODE_ENV: process.env.NODE_ENV || "development",
};

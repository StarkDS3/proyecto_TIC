import { config } from "dotenv";
config();

export const HOST = process.env.HOST
export const USER_DB = process.env.USER_DB
export const PORT = process.env.PORT
export const DATABASE = process.env.DATABASE
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnection from "./config/dbConnection.js";
import productRoutes from "./routes/product.routes.js";

const app = express();
dotenv.config({path: "./config/config.env"});

app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["GET", "POST", "DELETE", "PUT"],      // what are the methods going to use
    credentials : true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : true}));

app.use("/api/products", productRoutes);

dbConnection();
export default app;
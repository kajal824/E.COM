import express from "express";
import dotenv from "dotenv";

import { connectdb } from "./config/db.js";
import productRoutes from "./routes/product.routes.js"; // ✅ Correct name

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", productRoutes); // ✅ Use matching variable name

app.listen(PORT, () => {
    connectdb();
    console.log("Server started at http://localhost:" + PORT);
});


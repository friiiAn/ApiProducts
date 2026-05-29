import express from "express";
import productsRoutes from "./routers/products.routes.js";

const app = express();

app.use(express.json());

// RUTAS
app.use("/api/products", productsRoutes);

export default app;
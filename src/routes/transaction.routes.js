import { Router } from "express";
import { transactionController } from "../controllers/transection.controller.js";
import { productController } from "../controllers/product.controller.js";

const transactionRoute = Router();

transactionRoute.get("/", transactionController.getAll);

export default transactionRoute;

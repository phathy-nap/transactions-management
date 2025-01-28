import express from "express";
import TransactionController from "../controllers/transaction.controller.js";

const router = express.Router();

router.get("/", TransactionController.getAll)

export default router;
import express from "express";
import TransactionsController from "../controllers/transaction.controller.js";

const router = express.Router();

router.get("/", TransactionsController.getAll)

export default router;
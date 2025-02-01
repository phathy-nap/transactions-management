import express from "express";
import TransactionsController from "../controllers/transaction.controller.js";

const router = express.Router();

router.get("/", TransactionsController.getAll);
router.get("/form", TransactionsController.getForm);
router.post("/new", TransactionsController.addTransactions);

export default router;

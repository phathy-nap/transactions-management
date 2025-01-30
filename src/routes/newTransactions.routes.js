import express from "express";
import NewTransactionsController from "../controllers/newTransactions.controller.js";

const router = express.Router();

router.get("/", NewTransactionsController.getForm);
router.post("/", NewTransactionsController.addTransactions);

export default router;

import express from "express";
import NewTransactionsController from "../controllers/newTransactions.controller.js";

const router = express.Router();

router.get("/", NewTransactionsController.GetForm)

export default router;
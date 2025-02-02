import express from "express";
import TransactionsController from "../controllers/transaction.controller.js";

const router = express.Router();

//Home page
router.get("/", TransactionsController.getAll);

//Form for add new transactions
router.get("/form", TransactionsController.getForm);

//Form for edt the transaction
router.get("/edit/:id", TransactionsController.getEditForm);

//Add new data to database
router.post("/new", TransactionsController.addTransactions);

//Edit transactions
router.post("/edit/:id", TransactionsController.editTran);

//Delete transaction
router.post("/delete/:id", TransactionsController.deleteTran);

export default router;

import TransactionsModel from "../models/transactions.model.js"

class TransactionController{
    static async getAll(req, res){
        const result = await TransactionsModel.getAll();
        res.render("index", {allTransactionsData: result})
    }
}

export default TransactionController;
import TransactionsModel from "../models/transactions.model.js"

class TransactionsController{
    static async getAll(req, res){
        const result = await TransactionsModel.getAll();
        res.render("index", {allTransactionsData: result})
    }
}

export default TransactionsController;
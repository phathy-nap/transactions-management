import NewTransactionsModel from "../models/newTransactions.model";

class NewTransactionsController {
  static async getForm(req, res) {
    res.render("addNewForm")
  }
}

export default NewTransactionsController;

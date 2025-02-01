import TransactionsModel from "../models/transactions.model.js";
import ProductsModel from "../models/products.model.js";

class TransactionsController {
  static async getAll(req, res) {
    const result = await TransactionsModel.getAll();
    res.render("index", { allTransactionsData: result });
  }
  //render addNewForm.ejs with the essentials data from database
  static async getForm(req, res) {
    const productName = await ProductsModel.arrGetName(); //all products name
    res.render("addNewForm", { productName });
  }

  //get data from user input and give it to model. (product_name and qty only)
  static async addTransactions(req, res) {
    const product_name = req.body.productName;
    const qty = req.body.qty;
    await TransactionsModel.addNew(product_name, qty)
    res.redirect("/");
  }

  //render edit form with data prefilled.
  static async getEditForm(req, res) {
  }

}

export default TransactionsController;

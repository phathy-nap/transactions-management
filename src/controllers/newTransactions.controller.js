import NewTransactionsModel from "../models/newTransactions.model.js";
import ProductsModel from "../models/products.model.js";

class NewTransactionsController {
  //render addNewForm.ejs with the essentials data from database
  static async getForm(req, res) {
    const productName = await ProductsModel.arrGetName(); //all products name
    res.render("addNewForm", { productName });
  }

  //get data from user input and give it to model. (product_name and qty only)
  static async addTransactions(req, res) {
    const product_name = req.body.productName;
    const qty = req.body.qty;
    await NewTransactionsModel.newTransactions(product_name, qty);
    res.redirect("/transactions");
  }
}

export default NewTransactionsController;

// import NewTransactionsModel from "../models/newTransactions.model";
import ProductsModel from "../models/products.model.js";

class NewTransactionsController {
  //render addNewForm.ejs with the essentials data from database
  static async GetForm(req, res) {
    const productName = await ProductsModel.arrGetName(); //all products name 
    res.render("addNewForm", {productName})
  }
}

export default NewTransactionsController;

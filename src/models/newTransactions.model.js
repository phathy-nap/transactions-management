import pool from "../config/database.js";
import ProductsModel from "./products.model.js";

class NewTransactionsModel {
    //add new transactions into database
  static async newTransactions(product_name, qty) {
    try {
      const eachProductPrice = await ProductsModel.getPrice(product_name);
      const date = new Date();
      const total_price = qty * eachProductPrice;
      

      

      await pool.query(
        `INSERT INTO all_transactions (product_name, date, qty, total_price)
            VALUES ($1, $2, $3, $4)`,
        [product_name, date, qty, total_price]
      );
    } catch (error) {
      throw new Error(`Can't insert data into database ${error.message}`);
    }
  }
}

export default NewTransactionsModel;

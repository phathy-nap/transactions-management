import pool from "../config/database.js";

class NewTransactionsModel {
    //add new transactions into database
  static async newTransactions(product_name, date, qty, total_price) {
    try {

      await pool.query(
        `INSERT INTO all_transactions
            VALUES ($1, $2, $3, $4)`,
        [product_name, date, qty, total_price]
      );
    } catch (error) {
      throw new Error(`Can't insert data into database ${error.message}`);
    }
  }
}

export default NewTransactions;

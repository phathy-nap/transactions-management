import pool from "../config/database.js";

class TransactionsModel {
  static async getAll() {
    try {
      const { rows } = await pool.query("SELECT * FROM all_transactions");
      return rows;
    } catch (error) {
      throw new Error(`Can't fetch transactions data ${error.message}`);
    }
  }

}


export default TransactionsModel;
import pool from "../config/database.js";

class TransactionsModel {
  static async getAll() {
    try {
      const query = `
        SELECT 
          id, 
          product_name, 
          TO_CHAR(date, 'YYYY-MM-DD') AS date, 
          qty, 
          total_price 
        FROM 
          all_transactions
      `;
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw new Error(`Can't fetch transactions data ${error.message}`);
    }
  }
}

export default TransactionsModel;

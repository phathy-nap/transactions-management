import pool from "../config/database.js";
import ProductsModel from "./products.model.js";

class TransactionsModel {
  //get all transactions from database
  static async getAll() {
    try {
      //also format the date in to a more readable format
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
  //add new transactions into database
  static async addNew(product_name, qty) {
    try {
      const eachProductPrice = await ProductsModel.getPrice(product_name);
      const date = new Date();
      const total_price = qty * eachProductPrice;

      const query = `INSERT INTO all_transactions (product_name, date, qty, total_price)
                VALUES ($1, $2, $3, $4)`;
      await pool.query(query, [product_name, date, qty, total_price]);
    } catch (error) {
      throw new Error(`Can't insert data into database ${error.message}`);
    }
  }
  //get transaction data by id
  static async getTranById(id) {
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
      WHERE id = ($1)
    `;
      const { rows } = await pool.query(query, [id]);
      return rows;
    } catch (error) {
      throw new Error(`Can't fetch transactions data by ID ${error.message}`);
    }
  }
}

export default TransactionsModel;

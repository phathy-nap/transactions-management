import { databaseConnection } from "../db/config.js";

//sale related function

export const transactionsModel = {
  async getAll() {
    const result = await databaseConnection.query(
      "SELECT * FROM all_transactions"
    );
    return result.rows;
  },
  async addNew(product_name, date, qty, total_price) {
    await databaseConnection.query(
      "INSERT INTO all_transactions (product_name, qty) VALUES ($1, $2, $3, $4)",
      [product_name, date, qty, total_price]
    );
  },
};

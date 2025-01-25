import { databaseConnection  } from "../db/config.js";

export const productModel = {
  async getAll(req, res) {
    const result = await databaseConnection.query("SELECT * FROM products_informations");
    return result.rows;
  },
  async getPriceByName(product_name) {
    const each_price = databaseConnection.query("SELECT each_price FROM products_informations WHERE product_name = $1", [product_name])
    console.log(each_price);
    return each_price;
  }
};

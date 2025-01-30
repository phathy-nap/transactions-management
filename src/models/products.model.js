import pool from "../config/database.js";

class ProductsModel {
  //get all the product name and turn it into an array
  static async arrGetName() {
    const { rows } = await pool.query(
      "SELECT product_name FROM products_informations"
    );
    const arrProductName = rows.map((e) => e.product_name); //convert product name into an array rather than array of object
    return arrProductName;
  }
  static async getPrice(product_name) {
    const { rows } = await pool.query(
      "SELECT each_price FROM products_informations WHERE product_name = $1",
      [product_name]
    );
    const strPrice = rows[0].each_price;
    const price = parseFloat(strPrice.replace("$", ""))
    
    return price;
  }
}

export default ProductsModel;

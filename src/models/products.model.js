import pool from "../config/database.js";

class ProductsModel {
    //get all the product name and turn it into an array
  static async arrGetName() {
    const { rows } = await pool.query(
      "SELECT product_name FROM products_informations"
    );
    const arrProductName = rows.map(e => e.product_name); //convert product name into an array rather than array of object
    return arrProductName;
  }
}

export default ProductsModel;

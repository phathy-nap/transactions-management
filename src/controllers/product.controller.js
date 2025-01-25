import { json } from "express";
import { productModel } from "../models/product.model.js";
//Get all transections from database

export const productController = {
  async logAll() {
    const queryResult = await productModel.getAll();
    console.log(queryResult);
  },
};

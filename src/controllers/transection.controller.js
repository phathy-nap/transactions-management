import { query } from "express";
import { transactionsModel } from "../models/transaction.model.js";
import { productModel } from "../models/product.model.js";
//Get all transections from database

export const transactionController = {
  async getAll(req, res) {
    const queryResult = await transactionsModel.getAll()
    console.log("queryResult", queryResult);
    res.render("index", {allTransection: queryResult})
    
  },
  async logAll(req, res) {
    const queryResult = await transactionsModel.getAll();
    console.log(queryResult);
    res.redirect("/");
  },
  async addNew(product_name, date, qty, total_price) {
    const each_price = await productModel.getPriceByName(product_name);
    total_price = each_price*qty;
    await transactionsModel.addNew(product_name, date, qty, total_price)
    res.redirect("/")
  }
};
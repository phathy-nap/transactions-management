import express from "express";
import transactionRoute from "./src/routes/transaction.routes.js";

const app = express();

app.set("view engine", "ejs");
app.use("/", transactionRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

import express from "express"
import transactionRouter from "./src/routes/transactions.routes.js"
import newTransactionsRouter from "./src/routes/newTransactions.routes.js"
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./src/public'))

app.use("/transactions", transactionRouter)
app.use("/newTransactions", newTransactionsRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
    
})
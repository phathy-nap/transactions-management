import express from "express"
import TransactionRouter from "./src/routes/transactions.routes.js"
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./src/public'))

app.use("/transactions", TransactionRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
    
})
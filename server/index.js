require("dotenv").config()
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors")
const db = require("./db/db");
const {readdirSync} = require("fs");
// const { route } = require("./routes/transactions");
const connectDb = require("./config/connectDb");
const app = express();
const PORT =5000 || process.env.PORT;
const path = require("path");

//database
 connectDb();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
//user routes
app.use("/api/v1/users", require('./routes/userRoute'))
// transaction routes
app.use("/api/v1/transactions",require("./routes/transactionRoute"));

//static  files
app.use(express.static(path.join(__dirname,'../client/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

//listen server
app.listen(PORT||3000,()=>{
    console.log(`Server running on ${PORT}`);
})
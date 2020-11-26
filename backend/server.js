const express = require("express");
const cors = require("cors");
const middelwaremenus = require("./route/admin");
const middelwareorders = require("./route/client");
const middelwareauth=require('./route/auther');

const connected = require("./config/db");
const cookieParser = require('cookie-parser');
const app = express();

connected();

app.use(express.json());


app.use(cookieParser());
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header("Access-Control-Allow-Credentials", true);
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
   );
 
   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
   next();
 });

app.use("/Resto/plats", middelwaremenus);
app.use("/Resto/orders", middelwareorders);
app.use("/Resto/auth",middelwareauth);



// server cnx
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is running on port ${port}`));

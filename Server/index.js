const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = 5000;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const colors = require('colors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// connection
dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//api's rountes
app.use("/api/product", productRouter);
app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);


//server running port
app.listen(PORT, () => {
  console.log("===================================");
  console.log(`Server is running  at PORT ==> ${PORT}`.yellow.bold);
  console.log("===================================");
  console.log("|");
  console.log("|");
});


// module.exports = app; 

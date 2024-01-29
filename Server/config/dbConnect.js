const { default: mongoose } = require("mongoose");
const colors = require('colors');

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("|");
    console.log("|");
    console.log("===================================");
    console.log("Database Connected Successfully".yellow.bold);
  } catch (error) {
    console.log("|");
    console.log("|");
    console.log("===================================");
    console.log("DAtabase error".red.bold);

  }
};
module.exports = dbConnect;

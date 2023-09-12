const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected".cyan.underline);
  } catch (error) {
    console.log("Error in connecting MongoDb".red.bold);
    process.exit();
  }
};

module.exports = connectDB;

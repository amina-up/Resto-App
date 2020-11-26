const mongoose = require("mongoose")
const config = require("config")
const db = config.get ("URI")

const connectDB = async () => {
    try {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, //?
        useFindAndModify: false //?
      });
  
      console.log('MongoDB is Connected...');
    } catch (error) {
      console.error(error.message);
    }
  };
  
  module.exports = connectDB;
 
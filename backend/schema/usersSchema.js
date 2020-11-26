const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    
  },

});
usersSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id}, "privateKey");
  return token;
};
const users = mongoose.model("users", usersSchema);
module.exports = users;

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var platSchema = new Schema({
  name: String,
  price: String,
  image: String,
});

const plats = mongoose.model("plats", platSchema);
module.exports = plats;

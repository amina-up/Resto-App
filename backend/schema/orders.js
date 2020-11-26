const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ordersSchema = new Schema({
  name: String,
  price: String,
  image: String,
  validation:{ type: String, default: "en attente" },
  quantity:{ type: Number, default: 0 },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const orders = mongoose.model("orders", ordersSchema);
module.exports = orders;

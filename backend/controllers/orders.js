const Orders = require("../schema/orders");
module.exports = {
  getOrders: async (req, res) => {
    try {
      const orders = await Orders.find();
      res.json(orders);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  },
  addOrders: async (req, res) => {
    const { name, image, price,quantity,user,validation } = req.body;

    try {
      orders = new Orders({
        quantity,
        user,
        name,
        price,
        image,
        validation
      });
      await orders.save();
      res.json(orders);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  },
  deleteOrders: async (req, res) => {
    try {
      const orders = await Orders.findByIdAndDelete(req.params.id);
      res.json("orders deleted");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("order not deleted yet ");
    }
  },
  confirmerorder: async (req, res) => {
    try {
      let order = await Orders.findById(req.params.id);
      if (!order) return res.status(404).send({ msg: "the order is not found" });

      order = await Orders.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(order);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("not yet updated");
    }
  },

};

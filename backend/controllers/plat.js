const Plat = require("../schema/plat");
module.exports = {
  getplat: async (req, res) => {
    try {
      const plats = await Plat.find();
      res.json(plats);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  },

  addplat: async (req, res) => {
    const { name, image, price } = req.body;

    try {
      plat = new Plat({
        //name : req.body.name => same syntax
        name,
        price,
        image,
      });
      await plat.save();
      res.json(plat);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  },
  deleteplat: async (req, res) => {
    try {
      const plats = await Plat.findByIdAndDelete(req.params.id);
      res.json("plat deleted");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("not deleted yet");
    }
  },
  updateplat: async (req, res) => {
    try {
      let plat = await Plat.findById(req.params.id);
      if (!plat) return res.status(404).send({ msg: "the plate is not found" });

      plat = await Plat.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(plat);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("not yet updated");
    }
  },
};

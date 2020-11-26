const express = require("express");
const router = express.Router();
const menuController = require("../controllers/plat");

router.get("/", menuController.getplat);
router.post("/", menuController.addplat);
router.delete("/:id", menuController.deleteplat)
router.put("/:id", menuController.updateplat) 

module.exports = router;

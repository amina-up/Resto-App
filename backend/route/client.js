const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orders");

router.get("/", orderController.getOrders);
router.post("/", orderController.addOrders);
router.delete("/:id", orderController.deleteOrders);
router.put("/:id",orderController.confirmerorder)


module.exports = router;

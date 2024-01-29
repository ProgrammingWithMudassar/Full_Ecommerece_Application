const express = require("express");
const {
    createProduct,
    getaProduct,
    getAllProduct,
    deleteProduct
} = require("../controller/productCtrl");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();


//In real time admin and seller can performe these functionality
router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/:id", getaProduct);
router.delete("/:id", deleteProduct);


module.exports = router;

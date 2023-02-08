const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  //  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop" });
});

module.exports = router;

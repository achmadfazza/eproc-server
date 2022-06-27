var express = require("express");
var router = express.Router();

const { category, landingPage, location, detailPage } = require("./controller");

router.get("/barang", landingPage);
router.get("/:id/detail", detailPage);
router.get("/category", category);
router.get("/location", location);

module.exports = router;

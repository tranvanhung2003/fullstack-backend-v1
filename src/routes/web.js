const express = require("express");
const {
  getHomepage,
  getABC,
  getTvhung,
} = require("../controllers/home.controller");

const router = express.Router();

router.get("/", getHomepage);
router.get("/abc", (req, res) => getABC);
router.get("/tvhung", (req, res) => getTvhung);

module.exports = router; // export default

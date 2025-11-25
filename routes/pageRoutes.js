const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/create-ticket", (req, res) => {
  res.render("create-ticket");
});

router.get("/tickets", (req, res) => {
  const filePath = path.join(__dirname, "../data/tickets.json");
  const tickets = JSON.parse(fs.readFileSync(filePath, "utf8"));
  res.render("tickets", { tickets });
});

module.exports = router;

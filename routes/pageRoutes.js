const express = require("express");
const router = express.Router();
const tickets = require("../data/tickets.json");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/create-ticket", (req, res) => {
  res.render("create-ticket");
});

router.get("/tickets", (req, res) => {
  res.render("tickets", { tickets });
});

module.exports = router;

const express = require("express");
const fs = require("fs");
const router = express.Router();
const filePath = "./data/tickets.json";

router.post("/create", (req, res) => {
  const { title, description } = req.body;

  const tickets = JSON.parse(fs.readFileSync(filePath));
  const newTicket = {
    id: tickets.length + 1,
    title,
    description,
    createdAt: new Date().toISOString()
  };

  tickets.push(newTicket);
  fs.writeFileSync(filePath, JSON.stringify(tickets, null, 2));

  res.redirect("/tickets");
});

module.exports = router;

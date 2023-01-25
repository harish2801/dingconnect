const express = require("express");
const router = express.Router();
const { Bookings } = require("../models");

router.get("/", async (req, res) => {
  const listofBooks = await Bookings.findAll();
  res.json(listofBooks);
});

router.get("/fromMob/:id", async (req, res) => {
  const id = req.params.id;
  const client = await Bookings.findOne({ where: { fromMob: id } });
  res.json(client);
});
router.get("/toMob/:id", async (req, res) => {
  const id = req.params.id;
  const client1 = await Bookings.findOne({ where: { toMob: id } });
  res.json(client1);
});

router.post("/", async (req, res) => {
  const booking = req.body;
  await Bookings.create(booking);
  res.json(booking);
});
module.exports = router;

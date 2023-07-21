const { Router } = require("express");
const router = Router();
const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;

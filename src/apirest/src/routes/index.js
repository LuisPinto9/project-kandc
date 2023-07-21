const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
    const data = {
    "name": "hoña",
    "website": "hoalñ"
    }
    res.json(data);
  });

  module.exports = router;
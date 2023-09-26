const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => res.status(200).send("Microservicio Planets"));

router.use("/planets", require("./planetsRouter"));

module.exports = router;

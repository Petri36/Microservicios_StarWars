const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.status(200).send("Microservicio Characters"));

router.use("/characters", require("./charactersRouter"));

module.exports = router;

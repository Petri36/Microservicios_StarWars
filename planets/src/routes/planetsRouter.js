const { Router } = require("express");
const planets = require("../data/planets.json");
const axios = require("axios");

const planetsRouter = Router();

planetsRouter.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://database:8004/Planet");
    const planets = response.data;
    res.status(200).json(planets);
  } catch (error) {
    console.error(
      "Error al realizar la solicitud a la base de datos:",
      error.message
    );
    res
      .status(500)
      .json({ error: "Error al obtener datos de la base de datos" });
  }
});

module.exports = planetsRouter;

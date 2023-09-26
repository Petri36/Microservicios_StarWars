const { Router } = require("express");
const films = require("../data/films.json");
const axios = require("axios");

const filmsRouter = Router();

filmsRouter.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://database:8004/Film");
    const films = response.data;
    res.status(200).json(films);
  } catch (error) {
    console.error("Error al realizar la solicitud a la base de datos:", error.message);
    res.status(500).json({ error: "Error al obtener datos de la base de datos" });
  }
});

module.exports = filmsRouter;

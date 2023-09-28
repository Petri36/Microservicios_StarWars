const { Router } = require("express");
const characters = require("../data/characters.json");
const axios = require("axios");

const characterRouter = Router();

characterRouter.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://database:8004/Character");
    const characters = response.data;
    res.status(200).json(characters);
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

module.exports = characterRouter;

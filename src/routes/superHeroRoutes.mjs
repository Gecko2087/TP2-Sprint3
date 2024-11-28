import express from "express";
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroeController,
  crearSuperheroeController,
  actualizarSuperheroeController,
  eliminarSuperheroeController,
} from "../controllers/superheroesController.mjs";

const router = express.Router();

// Rutas principales para los superhéroes
router.get("/heroes", obtenerTodosLosSuperheroeController);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.post("/heroes", crearSuperheroeController);
router.put("/heroes/:id", actualizarSuperheroeController);
router.delete("/heroes/:id", eliminarSuperheroeController);

export default router;

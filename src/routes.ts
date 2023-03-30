import express from "express";
import { sociosController } from "./controllers/sociosController";
import { dependentesController } from "./controllers/dependentesController";
import { authController } from "./controllers/authController";
import { veiculosController } from "./controllers/veiculosController";
import { depoimentosController } from "./controllers/depoimentosController";

const router = express.Router();

router.post("/auth/register", sociosController.create);
router.post("/auth/login", authController.login);
router.post("/veiculos", veiculosController.create);
router.post("/depoimentos", depoimentosController.create);
router.post("/dependentes", dependentesController.create);

router.get("/socios", sociosController.index);
router.get("/socios/:id", sociosController.show);
router.get("/dependentes", dependentesController.index);
router.get("/dependentes/:id", dependentesController.findById);
router.get("/veiculos", veiculosController.index);
router.get("/depoimentos/all", depoimentosController.index);
router.get("/depoimentos", depoimentosController.depoimentoDeUmSocio);

router.delete("/socios", sociosController.delete);
router.delete("/dependentes/:id", dependentesController.delete);
router.delete("/veiculos/:id", veiculosController.delete);
router.delete("/depoimentos/:id", depoimentosController.delete);

router.put("/dependentes/:id", dependentesController.update);
router.put("/veiculos/:id", veiculosController.update);
router.put("/depoimentos/:id", depoimentosController.update);
router.put("/socios", sociosController.update);

export { router };

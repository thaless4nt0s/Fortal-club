import express from "express";
import { sociosController } from "./controllers/sociosController";
import { dependentesController } from "./controllers/dependentesController";
import { authController } from "./controllers/authController";

const router = express.Router();

router.post("/auth/register", sociosController.register);
router.post("/auth/login", authController.login);

router.get("/socios", sociosController.index);
router.get("/socios/:id", sociosController.show);
router.get("/dependentes", dependentesController.index);
router.get("/dependentes/:id", dependentesController.findById);

router.delete("/socios/", sociosController.remover);
router.delete("/dependentes/:id", dependentesController.delete);

router.put("/dependentes/:id", dependentesController.update);

export { router };

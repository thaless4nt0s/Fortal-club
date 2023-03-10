import express from 'express';
import { sociosController } from './controllers/sociosController';
import { dependentesController } from './controllers/dependentesController';

const router = express.Router();

router.post("/auth/register", sociosController.register);

router.get("/socios", sociosController.index);
router.get('/socios/:id', sociosController.show);
router.get("/dependentes", dependentesController.index);
router.get("/dependentes/:id", dependentesController.findById);

export {router}
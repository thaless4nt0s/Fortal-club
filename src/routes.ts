import express from 'express';
import { sociosController } from './controllers/sociosController';

const router = express.Router();

router.get("/socios", sociosController.index);
router.get('/socios/:id', sociosController.show);
export {router}
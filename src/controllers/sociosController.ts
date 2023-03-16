import { Request, Response } from "express";
import { socioService } from "../services/socioService";
import { getPaginationParams } from "../helpers/getPaginationParams";
import {getIdBySession } from "./authController";
export const sociosController = {
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query);
    try {
      const paginatedSocios = await socioService.findAllPaginated(
        page,
        perPage
      );
      return res.status(200).json(paginatedSocios);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  // GET socios/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const socio = await socioService.findByIdWithSocios(id);
      return res.status(200).json(socio);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  register: async (req: Request, res: Response) => {
    const { nome, email, senha } = req.body;
    try {
      const socioAlreadyExists = await socioService.findByEmail(email);
      if (socioAlreadyExists) {
        throw new Error("Este email já está cadastrado !!");
      }
      const socio = await socioService.create({
        nome, email, senha
      });
      return res.status(200).json(socio);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }    
  },
  remover: async(req: Request, res: Response) =>{
      try{
        const id = await getIdBySession();
        const removido = await socioService.delete(id);
        return res.status(200).json(removido);
      }catch(err){
        return res.status(500).json({message: err});
      }
  }
};

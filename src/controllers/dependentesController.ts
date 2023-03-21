import { Request, Response } from "express";
import { dependenteService } from "../services/dependenteService";

export const dependentesController = {
  index: async (req: Request, res: Response) => {
    try {
      const dependentes = await dependenteService.findAllDeps();
      return res.status(200).json(dependentes);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  findById: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const dependente = await dependenteService.findDepById(id);
      return res.status(200).json(dependente);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const dependenteDeletado = await dependenteService.deleteDep(
        parseInt(req.params.id)
      );
      return res.status(200).json(dependenteDeletado);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};

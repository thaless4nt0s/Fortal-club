import { Request, Response } from "express";
import { depoimentoService } from "../services/depoimentoService";
import { socioExists } from "../services/socioService";

export const depoimentosController = {
  index: async (req: Request, res: Response) => {
    try {
      const depoimentos = await depoimentoService.mostrarTodosDepoimentos();
      return res.status(200).json(depoimentos);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(404).json({ message: err.message });
      }
    }
  },

  depoimentoDeUmSocio: async (req: Request, res: Response) => {
    try {
      const socioId = await socioExists();
      const depoimento = await depoimentoService.depoimentoSocio(socioId);
      return res.status(200).json(depoimento);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(404).json({ message: err.message });
      }
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const socioId = await socioExists();
      const attributes = req.body;
      const depoimentoAtualizado = await depoimentoService.atualizarDepoimento(
        attributes,
        socioId
      );
      return res.status(200).json(depoimentoAtualizado);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(404).json({ message: err.message });
      }
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const socioId = await socioExists();
      const attributes = req.body;
      const novoDepoimento = await depoimentoService.criarDepoimento(
        socioId,
        attributes
      );
      return res.status(200).json(novoDepoimento);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(404).json({ message: err.message });
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const depoimentoDeletado = await depoimentoService.removerDepoimento(id);
      return res.status(200).json(depoimentoDeletado);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(404).json({ message: err.message });
      }
    }
  },
};

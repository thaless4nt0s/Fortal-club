import { Request, Response } from "express";
import { veiculoService } from "../services/veiculoService";
import { socioExists } from "../services/socioService";

export const veiculosController = {
  index: async (req: Request, res: Response) => {
    try {
      const id = await socioExists();
      const veiculoDoSocio = await veiculoService.veiculoSocio(id);
      return res.status(200).json(veiculoDoSocio);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const attributes = req.body;
      const id = parseInt(req.params.id);
      const veiculoAtualizado = await veiculoService.atualizarVeiculo(
        attributes,
        id
      );
      return res.status(200).json(veiculoAtualizado);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const attributes = req.body;
      const id = await socioExists();
      const veiculoCriado = await veiculoService.criarVeiculo(id, attributes);
      return res.status(200).json(veiculoCriado);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const veiculoDeletado = await veiculoService.removerVeiculo(id);
      return res.status(200).json(veiculoDeletado);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};

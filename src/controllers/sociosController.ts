import { Request, Response } from "express";
import { socioService } from "../services/socioService";
import { getPaginationParams } from "../helpers/getPaginationParams";

export const sociosController = {
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query)
    try {
      const paginatedSocios = await socioService.findAllPaginated(page, perPage);
      return res.status(200).json(paginatedSocios);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};

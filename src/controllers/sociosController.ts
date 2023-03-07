import { Request, Response } from "express";
import { Socios } from "../models";

export const sociosController = {
  index: async (req: Request, res: Response) => {
    try {
      const socios = await Socios.findAll({
        attributes: ["id", "nome", "email"],
        order: [["id", "ASC"]],
      }); //Encontra todos os socios

      return res.json(socios);
    } catch (err) {
      if (err instanceof Error){
        return res.status(400).json({message: err.message})
      }
    }
  },
};

import { Response, Request } from "express";
import { socioService } from "../services/socioService";
import { jwtService } from "../services/jwtService";

export const authController = {
  //POST/auth/login
  login: async (req: Request, res: Response) =>{
    const {email, senha} = req.body;

    try {
      const login = await socioService.findByEmail(email);
      if(!login){
        return res.status(404).json({message: "E-mail não registrado"});
      }
      login.checkPassword(senha, (err, isSame) =>{
        if(err){
          return res.status(400).json({message: err.message});
        }
        if(!isSame){
          return res.status(401).json({message: "Senha incorreta"});
        }
        const payload = {
          id: login.id,
          nome: login.nome,
          email: login.email
        }
        const token = jwtService.signToken(payload, "1d");

        return res.status(200).json({authenticated: true, ...payload, token});
      });
    } catch (err) {
      if(err instanceof Error){
        res.status(400).json({message: err.message});
      }
    }

  }
}
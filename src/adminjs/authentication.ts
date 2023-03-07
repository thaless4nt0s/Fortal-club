import { AuthenticationOptions } from "@adminjs/express";
import { Admins, Socios } from "../models";
import bcrypt from 'bcrypt';

export const authenticationOptions: AuthenticationOptions = {
  authenticate: async (email, password) => {
    const admin = await Admins.findOne({ where: { email } });
    if (admin) {
      const matched = await bcrypt.compare(password, admin.senha);
      if (matched) {
        return admin;
      }
    } else {
      const socio = await Socios.findOne({ where: { email } });
      if (socio) {
        const matched = await bcrypt.compare(password, socio.senha);
        if (matched) {
          return socio;
        }
      }
    }
    return false;
  },
  cookiePassword: "senha-do-cookie",
};
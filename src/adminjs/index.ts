import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResoucers } from "./resources";
import { Admins, Socios } from "../models";
import bcrypt from "bcrypt";
AdminJS.registerAdapter(AdminJSSequelize);

export const adminjs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  branding: {
    companyName: "Fortal Club",
    logo: "/logo.jpg",
    theme: {
      colors: {
        primary100: "#ff0043",
        primary80: "#ff1a57",
        primary60: "#ff3369",
        primary40: "#ff4d7c",
        primary20: "#ff668f",
        grey100: "#151515",
        grey80: "#333333",
        grey60: "#4d4d4d",
        grey40: "#666666",
        grey20: "#dddddd",
        filterBg: "#333333",
        accent: "#151515",
        hoverBg: "#151515",
      },
    },
  },
  resources: adminJsResoucers,
});

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminjs,
  {
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
  },
  null,
  { resave: false, saveUnitialized: false }
);

import { ResourceWithOptions } from "adminjs";
import { adminResourceOptions } from "./admin";
import { Admins } from "../../models";

export const adminJsResoucers: ResourceWithOptions[] = [
  {
    resource: Admins,
    options: adminResourceOptions
  }
]
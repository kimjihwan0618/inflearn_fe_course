import { Board } from "../Board.mariadb";
import { DataSourceOptions } from "typeorm";

export const dbConfig: DataSourceOptions = {
  type: "",
  host: "",
  port: 3333,
  username: "",
  password: "",
  database: "",
  entities: [Board],
  synchronize: true,
  logging: true,
};

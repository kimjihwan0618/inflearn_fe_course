import { Board } from '../Board.mariadb';
import { DataSourceOptions } from 'typeorm';

export const dbConfig: DataSourceOptions = {
  type: 'mariadb',
  host: 'kimjihodo.synology.me',
  port: 3306,
  username: 'nasmypopol',
  password: 'RlawlGheh0121!',
  database: 'markets',
  entities: [Board],
  synchronize: true,
  logging: true,
};

import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.SQL_DATABASE as string,
    process.env.SQL_USER as string,
    process.env.SQL_PASSWORD as string,
    {
        host: process.env.SQL_SERVER as string,
        port: parseInt(process.env.SQL_PORT as string),
        dialect: 'mssql',
    }
);

sequelize.authenticate().then((e) => {
    console.log('Conectado com sucesso');
  }).catch((error) => {
    console.log('Ocorreu algum erro ao conectar com o banco de dados', error);
  });
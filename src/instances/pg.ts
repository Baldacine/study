import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';
import db from './database';

dotenv.config();

export const sequelize = new Sequelize(
    db.db,
    db.user,
    db.password,
    {
        dialect: 'postgres',
        port: parseInt(db.port),
    }
);

sequelize.authenticate().then((e) => {
    console.log('Conectado com sucesso');
  }).catch((error) => {
    console.log('Error ao conectar com o banco de dados', error);
});
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/sql';

export interface UserInstance extends Model {
    id: number;
    nome: string;
    cel: string;
    avatar:string;
    email:string;
    senha: string;
    confirm:boolean;
    logradouro: string;
    numero: string;
    complemento: string;
    cep: string;
    bairro: string;
    cidade: string;
    longitude: string;
    latitude: string;
    uf: string;
    pais:string;
    ativo: boolean;
    touch_id: boolean;
    os: string;
    app_id:  string;
    chave_id:  string;
    resetelink:  string;
    dataregistro:Date; 
    dataultalt: Date; 
}

export const Login = sequelize.define<UserInstance>('login', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: DataTypes.STRING,},
    cel: {type: DataTypes.STRING,},
    avatar: {type: DataTypes.STRING,},
    email: {type: DataTypes.STRING,unique: true},
    senha: {type: DataTypes.STRING,},
    confirm: {type: DataTypes.BOOLEAN,},
    logradouro: {type: DataTypes.STRING},
    numero: {type: DataTypes.STRING},
    complemento: {type: DataTypes.STRING},
    cep: {type: DataTypes.STRING},
    bairro: {type: DataTypes.STRING},
    cidade: {type: DataTypes.STRING},
    longitude: {type: DataTypes.STRING},
    latitude: {type: DataTypes.STRING},
    uf: {type: DataTypes.STRING},
    pais: {type: DataTypes.STRING},
    ativo: {type: DataTypes.BOOLEAN},
    touch_id: {type: DataTypes.BOOLEAN},
    os:{type: DataTypes.STRING,},
    app_id:{type: DataTypes.STRING,},
    chave_id:{type: DataTypes.STRING,},
    resetelink: {type: DataTypes.STRING},
    dataregistro: {type: DataTypes.DATE},
    dataultalt: {type: DataTypes.DATE}
}, {
    tableName: 'login',
    timestamps: false,
	freezeTableName: true
});
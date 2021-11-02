import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface UserInstance extends Model {
    id: number;
    email:string;
    password:string;
}

export const User = sequelize.define<UserInstance>('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING,unique: true},
    password: {type: DataTypes.STRING,},
}, {
    tableName: 'user',
    timestamps: false,
});
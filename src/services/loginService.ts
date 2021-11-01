import bcrypt from 'bcrypt';
import { userInfo } from 'os';
import { Login } from '../models/loginModel';

export const createUser =  async(email: string, password: string) => {
   
    const hasUser = Login.findOne({where:{email}});

    if(!hasUser){
        const hash = bcrypt.hashSync(password, 10);
        const newUser = await Login.create({
            email,
            password
        });

        return newUser;

    }else{
        return new Error('E-mail já existe');
    }
}

export const findByEmail =  async(email: string) => {
    return await Login.findOne({where:{email}});
}

export const matchPassword =  async(passwordText: string, encrypted: string) => {
    return bcrypt.compareSync(passwordText, encrypted);
}

export const all =  async() => {
    return await Login.findAll();
}
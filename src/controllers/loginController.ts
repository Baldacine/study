import { Request, Response } from 'express';
import * as loginService from '../services/loginService';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.senha) {
        let { email, password } = req.body;

        const newUser = await loginService.createUser(email, password);
        if(newUser instanceof Error){
            res.json({ error: newUser.message });
        }else{
            res.status(201);
            res.json({ id: newUser.id });
        }
    }

    res.json({ error: 'E-mail e/ou senha não enviados.' });
}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.senha) {
        let email: string = req.body.email;
        let password: string = req.body.senha;

        const user = await  loginService.findByEmail(email);
        if(user && loginService.matchPassword(password, user.senha))

        if(user) {
            res.json({ status: true });
            return;
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let users = await loginService.all();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}
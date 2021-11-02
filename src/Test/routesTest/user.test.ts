import { response } from 'express';
import request from 'supertest';
import app from '../../app';
import { User } from '../../models/User';

describe('Testing api routes', () =>{

    let email = 'wandersonse0@gmail.com';
    let password ='123456';
    
    beforeAll(async () => {
        await User.sync({ force: true });
    });


    it('should ping pong', (done) => {
        request(app)
            .get('/ping')
            .then(response => {
               expect(response.body).toBeTruthy();
               return done();
            })
    });

    it('should register a new user', (done) => {
        request(app)
            .post('user/register')
            .send(`email${email}&password${password}`)
            .then(response => {
               expect(response.body.error).toBeUndefined();
               expect(response.body).toHaveProperty('id');
               return done();
            })
    });


});
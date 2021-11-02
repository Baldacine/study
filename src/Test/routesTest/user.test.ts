import { response } from 'express';
import request from 'supertest';
import app from '../../app';
import { User } from '../../models/UserModel';

describe('Testing api routes', () =>{

    let email = 'wandersonse0@gmail.com';
    let password ='123456';
    
    beforeAll(async () => {
        await User.sync({ force: true },);
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
            .send(`email=${email}&password=${password}`)
            .then(response => {
               expect(response.body.error).toBeUndefined();
               expect(response.body).toHaveProperty('id');
               return done();
            })
    });

    it('should not allow to register with existing email', (done) => {
        request(app)
            .post('user/register')
            .send(`email=${email}&password=${password}`)
            .then(response => {
               expect(response.body.error).not.toBeUndefined();
               return done();
            })
    });

    it('should not allow to register without password', (done) => {
        request(app)
            .post('user/register')
            .send(`email=${email}`)
            .then(response => {
               expect(response.body.error).not.toBeUndefined();
               return done();
            })
    });

    it('should not allow to register without email', (done) => {
        request(app)
            .post('user/register')
            .send(`password=${password}`)
            .then(response => {
               expect(response.body.error).not.toBeUndefined();
               return done();
            })
    });

    it('should not allow to register without any data', (done) => {
        request(app)
            .post('user/register')
            .send(``)
            .then(response => {
               expect(response.body.error).not.toBeUndefined();
               return done();
            })
    });

    it('should login correctly', (done) => {
        request(app)
            .post('user/login')
            .send(`email=${email}&password=${password}`)
            .then(response => {
               expect(response.body.error).not.toBeUndefined();
               expect(response.body.status).toBeTruthy();
               return done();
            })
    });

    it('should not login with incorrect data', (done) => {
        request(app)
            .post('user/login')
            .send(`email=${email}&password=invalid`)
            .then(response => {
               expect(response.body.error).toBeUndefined();
               expect(response.body.status).toBeTruthy();
               return done();
            })
    });

    it('should list users', (done) => {
        request(app)
            .get('user/list')
            .then(response => {
               expect(response.body.error).toBeUndefined();
               expect(response.body.list.length).toBeGreaterThanOrEqual(1);
               expect(response.body.email).toContain(email);
               return done();
            })
    });


});
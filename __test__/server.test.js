'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('express server', () => {


    it('should check lets start works successfully', async () => {
        //arrange
        let param = '/';
        let status = 200;
        let text = 'lets start';

        //act 
        const response = await request.get(param);

        // assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);
    });

    it('should check 500 errors', async () => {
        //arrange
        let param = '/bad';
        let status = 500;

        //act 
        const response = await request.get(param);

        // assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(param);
    });

    it('should check 404 errors', async () => {
        //arrange
        let param = '/notfound';
        let status = 404;

        //act
        const response = await request.get(param);

        // assert
        expect(response.status).toBe(status);
    });

    /// food status
    it('check for get all food status', async () => {
        //arrange
        let param = '/food';
        let status = 200;

        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
    });

    it('check for the get /food:id status', async () => {
        const response = await request.get('/food/1');
        expect(response.status).toBe(200);
    });

    it('check for the status for the POST', async () => {
        const reqBody = {
            'food': 'pizza',
            'drink': 'pepsi',
        };
        const response = await request.post('/food').send(reqBody);
        expect(response.status).toBe(201);
    });

    it('check for the status for the update', async () => {
        const response = await request.put('/food/2');
        expect(response.status).toBe(200);
    });

    it('check for the status for the delete', async () => {
        const response = await request.delete('/food/1');
        expect(response.status).toBe(204);
    });

    /// clothes status
    it('check for the get all clothes status', async () => {
        const response = await request.get('/clothes');
        expect(response.status).toBe(200);
    });

    it('check for the get /clothes:id status', async () => {
        const response = await request.get('/clothes/1');
        expect(response.status).toBe(200);
    });

    it('check for the status for the POST', async () => {
        const reqBody = {
            'clothes': 'boss',
            'jacket': 'zara',
        };
        const response = await request.post('/clothes').send(reqBody);
        expect(response.status).toBe(201);
    });

    it('check for the status for the update', async () => {
        const response = await request.put('/clothes/2');
        expect(response.status).toBe(200);
    });

    it('check for the status for the delete', async () => {
        const response = await request.delete('/clothes/1');
        expect(response.status).toBe(204);
    });

});
'use strict';

const {server} = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe ('express server' , ()=> {


  it('shoud check the Working... works successfully', async()=> {
    //arange
    let param = '/';
    let status = 200;
    let text = 'lets start';

    //act 
    const response = await request.get(param);
    
    // assert
    expect(response.status).toBe(status);
    expect(response.text).toBe(text);
  });

  it('should check 500 errors', async()=> {
    //arange
    let param = '/bad';
    let status = 500;

    //act 
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
    expect(response.body.route).toBe(param);
  });

  it('shoud check 404 errors', async()=> {
    //arange

    let param = '/notfound';
    let status = 404;

    //act
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
  });

  /// food status
  it('check for the get /food status', async () => {
    const response = await request.get('/food'); 
    expect(response.status).toBe(200);
  });

  it('check for the get /food:id status', async () => {
    const response = await request.get('/food/1'); 
    expect(response.status).toBe(200);
  });

  it('check for the status for the POST', async () => {
    const foodObj={
      'food': 'pizza',
      'drink': 'pepsi',
    };
    const response = await request.post('/food').send(foodObj); 
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
  it('check for the get /clothes status', async () => {
    const response = await request.get('/clothes'); 
    expect(response.status).toBe(200);
  });
  
  it('check for the get /clothes:id status', async () => {
    const response = await request.get('/clothes/1'); 
    expect(response.status).toBe(200);
  });
  
  it('check for the status for the POST', async () => {
    const clothesObj={
      'clothes': 'boss',
      'jacket': 'zara',
    };
    const response = await request.post('/clothes').send(clothesObj); 
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
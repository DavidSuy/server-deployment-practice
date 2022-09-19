'use strict';

const supertest = require('supertest');
const app = require('../server');
const request = supertest(app);

describe('Testing our HTTP Server', () => {
  test(`Should return an object with a greeting property with the value of "Hello World", on GET to /hello`, async () => {
    let response = await request.get('/greeting');
    expect(response.status).toEqual(200);
    expect(response.body.greeting).toEqual('Hello World');
  });
});

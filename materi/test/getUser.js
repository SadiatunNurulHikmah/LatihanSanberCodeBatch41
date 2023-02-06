

const { expect } = require('chai');
const request = require('supertest');
//const auth = require('./auth.js');

//const baseUrl3 = 'http://restapi.adequateshop.com';

//const token = auth.token;

const response = request('http://restapi.adequateshop.com')
    .post('/api/authaccount/login')
    .send({
        "email": "diah.hikmah@gmail.com",
        "password": "123456"
      })
console.log(response)

describe('Get Users', async() =>{
    const response = request('http://restapi.adequateshop.com') //baseUrl
    .get('/api/users?page=1') //endpoint
    .set({'Authorization' : token})
    

    console.log((await response).body)
    it('response status is 200', async () =>{
        expect((await response).status).to.equal(200)
    })

    
})
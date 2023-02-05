// get booking restful booker

const { expect } = require('chai');
const request = require('supertest');
const data = require('../data/userData.js');
const testData = data.CREATE_USER_DATA_1;

const baseUrl = 'https://restful-booker.herokuapp.com';
const baseUrl2 = 'https://petstore.swagger.io/v2';


describe('Place an order for a pet', function(){
    const response = request(baseUrl2) //baseUrl
        .post('/store/order') //endpoint
        .send({
            "id": 0,
            "petId": 0,
            "quantity": 0,
            "shipDate": "2023-02-04T13:55:07.134Z",
            "status": "placed",
            "complete": true
          })

    it('response status is 200', async () =>{ 
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })

    it('message is equal to Pet ID', async () =>{ 
        //console.log((await response).status)
        //console.log((await response).body)
        expect((await response).body.petId).to.equal(0)
    })
})


describe('Place an order for a pet 2', function(){
    const response = request(baseUrl2) //baseUrl
        .post('/store/order') //endpoint
        .send(testData)

    it('response status is 200', async () =>{ 
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })

    it('message is equal to Pet ID', async () =>{ 
        //console.log((await response).status)
        //console.log((await response).body)
        expect((await response).body.petId).to.equal(testData.petId)
    })
})
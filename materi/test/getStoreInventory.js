// get booking restful booker

const { expect } = require('chai');
const request = require('supertest');
const auth = require('./auth.js');


const baseUrl = 'https://restful-booker.herokuapp.com';
const baseUrl2 = 'https://petstore.swagger.io/v2';
const baseUrl3 = 'http://restapi.adequateshop.com';

describe('App', function(){
    // assert tulisan sesuai ekspektasi
    
    it('app should return welcome message', function(){
        let response = "Welcome!!";
        //expect(response).to.include("Welcome")
    })
})


//describe('Get Booking All', function(){
//    it('response status is 200', async () =>{
//       this.timeout(50000);
//        const response = request(baseUrl) //baseUrl
//        .get('/booking') //endpoint
//        //console.log((await response).status)
//        //console.log((await response).body)
//        expect((await response).status).to.equal(200)
//    })
//})

describe('Returns pet inventories by status', function(){
    const response = request(baseUrl2) //baseUrl
    .get('/store/inventory') //endpoint
    
    it('response status is 200', async () =>{
        //console.log((await response).status)
        //console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
})

describe('Get Costumer By Id', function(){
    const response = request(baseUrl3) //baseUrl
    .get('/api/Costumer/{id}') //endpoint
    
    let id = auth.id
    console.log(id)
    it('response status is 200', async () =>{
        //console.log((await response).status)
        //console.log((await response).body)
        expect((await response).status).to.equal(200)
    })

    
})
const request = require('supertest');
//const response = require('../../TugasPekanan3Javascript/datatotalquantity');

const baseUrl3 = 'http://restapi.adequateshop.com';

module.exports = function(){
    const response = request(baseUrl3)
    .post('/api/AuthAccount/Login')
    .send({
        "email": "diah.hikmah@gmail.com",
        "password": "123456"
      })
    .set({'Authorization' : response.body.data.Token})

    //let token = response.body.data.Token
    console.log(Authorization)
      //id = response.body.data.id
    return Token
}


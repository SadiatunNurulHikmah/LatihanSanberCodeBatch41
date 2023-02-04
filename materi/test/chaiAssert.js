const { expect } = require('chai');
const { describe, it } = require('mocha');
//console.log(describe)
//const app = require('../app');

// definisi assert
// cara assert menggunakan chai
describe('App', function(){
    // assert tulisan sesuai ekspektasi
    
    it('app should return welcome message', function(){
        let response = "Welcome!!";
        expect(response).to.include("Welcome")
    })
})

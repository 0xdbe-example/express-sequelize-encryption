
const supertest = require("supertest");
const assert = require('assert');
const app = require("../app.js");

describe("GET /", function() {
    it("it should has status code 200", function(done) {
      supertest(app)
        .get("/")
        .expect(200)
        .end(function(err, res){
          if (err) done(err);
          done();
        });
    });
  });

describe("Customers API", function() {
    it('should add Frodon Saque', function(done) {
      supertest(app)
        .post('/customers')
        .send({"firstName":"Frodon ","lastName":"Saque","creditCardNumber":"1111-2222-3333-4444"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function (response) {
          // Do something with response
          //expect(response.body.firstName).is.equal.to('Frodon');
          assert(response.body.firstName, 'Frodon');
          assert(response.body.lastName, 'Saque');
          assert(response.body.creditCardNumber, '1111-2222-3333-4444');
          })
        .end(function(err, res) {
           if (err) return done(err);
           done();
        });
    });

  });
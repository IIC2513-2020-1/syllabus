const assert = require('assert');
const faker = require('faker');
const supertest = require('supertest');
const calculator = require('../models/calculator');
const { app, server } = require('../app');

describe('Models', function() {
  describe('Calculator', function() {
    const number1 = faker.random.number();
    const number2 = faker.random.number();
    
    describe('.calculate()', function() {
      describe('With valid values', function() {
        it('returns correct value when apply sum operation', function() {
          const calculatorValue = calculator.calculate('sum', number1, number2);
          assert.equal(calculatorValue, number1 + number2);
        });
  
        it('returns correct value when apply sub operation', function() {
          const calculatorValue = calculator.calculate('sub', number1, number2);
          assert.equal(calculatorValue, number1 - number2);
        });
  
        it('returns correct value when apply times operation', function() {
          const calculatorValue = calculator.calculate('times', number1, number2);
          assert.equal(calculatorValue, number1 * number2);
        });
  
        it('returns correct value when apply div operation', function() {
          const calculatorValue = calculator.calculate('div', number1, number2);
          assert.equal(calculatorValue, number1 / number2);
        });
      })
      
      describe('With invalid values', function() {
        it('returns null value when apply different operation', function() {
          const calculatorValue = calculator.calculate('asd', number1, number2);
          assert.equal(calculatorValue, null);
        });
      });
    });
  });
});


describe('Integration', function() {
  describe('Calculator', function() {
    const number1 = faker.random.number();
    const number2 = faker.random.number();
    const operation = faker.random.arrayElement(['sum', 'sub', 'times', 'div']);
    const calculatorValue = calculator.calculate(operation, number1, number2);
    const api = supertest(app);

    describe('GET /operations', function() {
      it('returns correct result', function(done) {        
        api.get(`/operations/${operation}/${number1}/${number2}`)
          .expect(200, {
            result: calculatorValue,
          }, done);
      });
    });

    afterAll(function (done) {
      server.close();
      done();
    })
  });
});

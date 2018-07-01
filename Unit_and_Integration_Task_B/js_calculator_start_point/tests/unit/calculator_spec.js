var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.previousTotal = 3;
    calculator.add(6);
    assert.equal(calculator.runningTotal, 9);
  })

  it('it can subtract', function(){
    calculator.previousTotal = 10;
    calculator.subtract(3);
    assert.equal(calculator.runningTotal, 7);
  })

  it('it can multiply', function(){
    calculator.previousTotal = 10;
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 20);
  })

  it('it can divide', function(){
    calculator.previousTotal = 6;
    calculator.divide(3);
    assert.equal(calculator.runningTotal, 2);
  })

  it('it can click number', function(){
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 2)
  })

  it('it can click operators', function(){
    calculator.operatorClick('-');
    assert.equal(calculator.previousOperator, '-')
  })

  it('it can clear all', function(){
    calculator.numberClick(4);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0)
  })

});

var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  it('it should add 2 numbers correctly', function(){
    calculator.numberClick(1)
    calculator.operatorClick()
    calculator.add(4)
    calculator.operatorClick()
    assert.strictEqual(calculator.runningTotal, 5)
  })
  it('it should subtract 2 numbers correctly', function(){
    calculator.numberClick(7)
    calculator.operatorClick()
    calculator.subtract(4)
    calculator.operatorClick()
    assert.strictEqual(calculator.runningTotal, 3)
  })
  it('it should be multiply two numbers together correctly', function(){
    calculator.numberClick(3)
    calculator.operatorClick()
    calculator.multiply(5)
    calculator.operatorClick()
    assert.strictEqual(calculator.runningTotal, 15)
  })
  it('should be able to divide one number by another correctly', function(){
    calculator.numberClick(21)
    calculator.operatorClick()
    calculator.divide(3)
    calculator.operatorClick()
    assert.strictEqual(calculator.runningTotal, 7)
  })

});

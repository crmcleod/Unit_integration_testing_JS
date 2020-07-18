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
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5)
  })
  it('it should subtract 2 numbers correctly', function(){
    calculator.numberClick(7)
    calculator.operatorClick()
    calculator.subtract(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3)
  })
  it('it should be multiply two numbers together correctly', function(){
    calculator.numberClick(3)
    calculator.operatorClick()
    calculator.multiply(5)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 15)
  })
  it('it should be able to divide one number by another correctly', function(){
    calculator.numberClick(21)
    calculator.operatorClick()
    calculator.divide(3)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 7)
  })
  it('it should be able to concatenate clicked numbers', function(){
    calculator.numberClick(5)
    calculator.numberClick(6)
    calculator.numberClick(9)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 569)
  })
  it('it should be able to chain multiple operations together', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.operatorClick('/')
    calculator.operatorClick('+')
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 2)
  })
  it('it should be able to clear the running total without affecting the calculation', function(){
  calculator.numberClick(8)
  calculator.clearClick()
  calculator.numberClick(5)
  calculator.operatorClick('-')
  calculator.clearClick()
  calculator.operatorClick('+')
  calculator.numberClick(3)
  calculator.operatorClick('=')
  assert.strictEqual(calculator.runningTotal, 8)
  })
})

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
    assert.strictEqual(calculator.runningTotal, 5)
  })
  it('it should subtract 2 numbers correctly', function(){
    calculator.numberClick(7)
    calculator.operatorClick()
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 3)
  })

});

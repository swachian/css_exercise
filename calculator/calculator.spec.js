const {
  Calculator
} = require('./calculator');


describe('computeShow basic', () => {
  let calculator = new Calculator('a');
  test('showing is empty', () => {
    expect(calculator.computeShow(3)).toEqual('3');
  });
  test('append to showing', () => {
    expect(calculator.computeShow(5)).toEqual('35');
  });
  test('del to showing', () => {
    expect(calculator.computeShow('del')).toEqual('3');
  });
  test('cls to showing', () => {
    expect(calculator.computeShow('clr')).toEqual('');
  });

});

describe('computeShow operator', () => {
  let calculator = new Calculator();

  test('one operator', () => {
    calculator.computeShow(3);
    expect(calculator.computeShow('+')).toEqual('3+');
  });
  test('add another value', () => {
    // 3 + 53 = 56
    expect(calculator.computeShow(5)).toEqual('3+5');
    calculator.computeShow(3)
    expect(calculator.computeShow('+')).toEqual('56+');
  });
}); 

describe('computeShow operator equals', () => {
  let calculator = new Calculator();

  test('equals', () => {
    calculator.computeShow(3);
    calculator.computeShow('+')
    calculator.computeShow('5')
    expect(calculator.computeShow('=')).toEqual('8');
  });
}); 
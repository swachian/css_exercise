const {
  Calculator
} = require('./calculator');


describe('computeShow basic', () => {
  let calculator = new Calculator('a');
  test('showing is empty', () => {
    expect(calculator.computeShow(3)).toEqual('3');
  });
  test('append to showing', () => {
    expect(computeShow(5)).toEqual('35');
  });
  // test('del to showing', () => {
  //   expect(computeShow('del')).toEqual('3');
  // });
  // test('cls to showing', () => {
  //   expect(computeShow('clr')).toEqual('');
  // });

});

describe('computeShow operator', () => {
  let calculator = new Calculator();
  let computeShow = calculator.computeShow;

  // test('one operator', () => {
  //   computeShow(3)
  //   expect(computeShow('+')).toEqual('3+');
  // });
  // test.skip('add another value', () => {
  //   // 3 + 53 = 56
  //   computeShow(5)
  //   computeShow(3)
  //   expect(computeShow('+')).toEqual('56');
  // });
  // test('del to showing', () => {
  //   expect(computeShow('del')).toEqual('3');
  // });
  // test('cls to showing', () => {
  //   expect(computeShow('clr')).toEqual('');
  // });

}); 
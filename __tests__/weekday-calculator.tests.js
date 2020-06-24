import { checkDate } from './../src/weekday-calculator.js';

describe('Weekday Calculator', () => {

  test('should be able to enter valid date', () => {
    expect(checkDate(2000, 1, 10)).toEqual(true);
  });
});

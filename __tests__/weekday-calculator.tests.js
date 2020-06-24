import { checkDate } from './../src/weekday-calculator.js';

describe('Weekday Calculator', () => {

  test('should be able to enter valid date', () => {
    expect(checkDate(2000, 1, 10)).toEqual(true);
  });

  test('should not be able to enter 31 for months with 30 days', () => {
    expect(checkDate(2000, 3, 31)).toEqual(false);
  });

  test('should not be able to enter greater than 28 for febuary', () => {
    expect(checkDate(2000, 1, 30)).toEqual(false);
  });

  test('should not be able to enter greater than 29 for febuary on leap years', () => {
    expect(checkDate(2000, 1, 31)).toEqual(true);
  });
});

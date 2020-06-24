import { checkDate } from './../src/weekday-calculator.js';
import { returnDayOfWeek } from './../src/weekday-calculator.js';
import { getNumberOfDays } from './../src/weekday-calculator.js';

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
    expect(checkDate(2000, 1, 31)).toEqual(false);
  });

  test('should by able to enter negative numbers', () => {
    expect(checkDate(-2000, 1, 29)).toEqual(true);
  });

  test('should not be ableto enter greater than 30 for September, April, June, and November', () => {
    expect(checkDate(2000, 3, 31)).toEqual(false);
  });

  test('should return day of the week', () => {
    expect(returnDayOfWeek(1)).toEqual('Monday');
  });

  test('should return number of days from entered date to Jan 1 1970, if day is the same and there are no leap years between', () => {
    expect(getNumberOfDays(1971, 0, 1)).toEqual(365);
  });

  test('should return number of days from entered date to Jan 1 1970, if day is not the same', () => {
    expect(getNumberOfDays(1971, 0, 2)).toEqual(366);
  });
});

export function checkDate (year, month, day) {
  let months30 = [8, 3, 5, 10];
  if ((month === 1 && day > 28 && !checkIfLeapYear(year)) || (month === 1 && day > 29 && checkIfLeapYear(year))) {
    return false;
  } else if ((typeof year === "number" && month >= 0 && month <= 11) && ((day >= 0 && day <= 31 && !months30.includes(month)) || ((day >= 0 && day <= 30 && months30.includes(month))))) {
    return true;
  }
  return false;
}

function checkIfLeapYear(year) {
  if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

export function returnDayOfWeek(day) {
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let weekday = daysOfTheWeek[day];
  return weekday;
}
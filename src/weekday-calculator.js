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

function checkIf30Month(month) {
  let months30 = [8, 3, 5, 10];
  if (months30.includes(month)) {
    return true;
  } else {
    return false;
  }
}

export function returnDayOfWeek(days) {
  const day = days % 7;
  const daysOfTheWeek = ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
  let weekday = daysOfTheWeek[day];
  return weekday;
}

export function getNumberOfDays (year, month, day) {
  let days = 0;
  let months30 = [8, 3, 5, 10];
  let startYear = 0;
  let endYear = 0;
  if (year >= 1970) {
    startYear = 1970;
    endYear = year;
  } else {
    startYear = year;
    endYear = 1970;
  }
  for (let i = startYear; i < endYear; i++) {
    if (checkIfLeapYear(i)) {
      days += 366;
    } else {
      days += 365;
    }
  }
  if (year >= 1970) {
    for (let i = 0; i < month; i++) {
      if (checkIf30Month(i)) {
        days += 30;
      } else if (i === 1 && checkIfLeapYear(year)) {
        days += 29;
      } else if (i === 1 && !checkIfLeapYear(year)) {
        days += 28;
      } else {
        days += 31;
      }
    }
    for (let i = 0; i < day - 1; i++) {
      days += 1;
    }
  } else {
    for (let i = 0; i < month; i++) {
      if (checkIf30Month(i)) {
        days -= 30;
      } else if (i === 1 && checkIfLeapYear(year)) {
        days -= 29;
      } else if (i === 1 && !checkIfLeapYear(year)) {
        days -= 28;
      } else {
        days -= 31;
      }
    }
    for (let i = 0; i < day - 1; i++) {
      days -= 1;
    }
  }
  return days;
}
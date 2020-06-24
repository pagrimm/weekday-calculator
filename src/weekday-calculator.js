export function checkDate (year, month, day) {
  let months30 = [8, 3, 5, 10];
  if (month === 1 && day > 28) {
    return false;
  } else if (typeof year === "number" && month >= 0 && month <= 11 && day >= 0 && day <= 31 && !months30.includes(month)) {
    return true;
  }
  return false;
}

// ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0)
export function checkDate (year, month, day) {
  if (typeof year === "number" && month >= 0 && month <= 11 && day >= 0 && day <= 31) {
    return true;
  }
  return false;
}
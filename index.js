function isMonday(dayOfWeek) {
  return dayOfWeek === 1 ? true : false;
}

function isLastMonthOfDay(dayOfMonth) {
  return dayOfMonth === 30 || dayOfMonth === 30 || dayOfMonth === 28
    ? true
    : false;
}

function isFirstMonthOfDay(dayOfMonth) {
  return dayOfMonth === 1 ? true : false;
}

function getLastDayOfLastMonth() {
  const monthsWith30 = [3, 5, 8, 10];
  const monthsWith31 = [0, 2, 4, 6, 7, 9, 11];

  var monthOfNumber = new Date().getMonth();

  return monthsWith30.indexOf(monthOfNumber)
    ? 30
    : monthsWith31.indexOf(monthOfNumber)
    ? 31
    : 29;
}

function getLastDay(dayOfWeek, dayOfMonth) {
  //Si el dia es el ultimo del mes
  if (isLastMonthOfDay(dayOfMonth))
    return !isMonday(dayOfWeek) ? dayOfMonth : dayOfMonth - 3;

  //Si el dia es el ultimo del mes
  if (isFirstMonthOfDay(dayOfMonth))
    return !isMonday(dayOfWeek) ? dayOfMonth : getLastDayOfLastMonth() - 3;

  if (isMonday(dayOfWeek)) return dayOfWeek - 3;

  return dayOfWeek;
}

function getLastMonth(dayOfMonth) {
  var month = new Date().getMonth() + 1;

  return isFirstMonthOfDay(dayOfMonth) ? month - 1 : month;
}

function validateDate(day, month) {
  if (day.length < 2) day = '0' + day;

  if (month.length < 2) month = '0' + month;

  return [day, month];
}

function Main() {
  var dayOfWeek = 1;
  var dayOfMonth = 4;
  var lastDay = getLastDay(dayOfWeek, dayOfMonth);
  var lastMonth = getLastMonth(dayOfMonth);

  return '' + lastDay + '/' + lastMonth;
}

console.log(Main());

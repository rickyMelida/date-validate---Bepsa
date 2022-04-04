//Funcion que verifica si es lunes
//Recibe como parametro dia de la semana en numeros(1-7)
function isMonday(dayOfWeek) {
  return dayOfWeek == 1 ? true : false;
}

//Funcion que verifica si es el ultimo dia del mes
//Recibe como parametro dia del mes(1-31)
function isLastMonthOfDay(dayOfMonth) {
  return dayOfMonth == 31 || dayOfMonth == 30 || dayOfMonth === 28
    ? true
    : false;
}

//Funcion que verifica si es el primer dia del mes
//Recibe como parametro dia del mes(1-31)
function isFirstMonthOfDay(dayOfMonth) {
  return dayOfMonth === 1 ? true : false;
}

//Funcion que retorna el ultimo dia del mes anterior
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

//Funcion que retorna el ultimo dia habil
//Recibe como parametros el dia de la semana en numeros(1-7) y el dia del mes(1-31)
function getLastDay(dayOfWeek, dayOfMonth) {
  //Si el dia es el ultimo del mes
  if (isLastMonthOfDay(dayOfMonth))
    return !isMonday(dayOfWeek) ? dayOfMonth : dayOfMonth - 3;

  //Si el dia es el ultimo del mes
  if (isFirstMonthOfDay(dayOfMonth))
    return !isMonday(dayOfWeek) ? dayOfMonth : getLastDayOfLastMonth() - 3;

  if (isMonday(dayOfWeek)) return dayOfMonth - 3;

  return dayOfMonth - 1;
}

//Funcion que retorna el ultimo mes habil
//Recibe como parametro dia del mes(1-31)
function getLastMonth(dayOfMonth) {
  var month = new Date().getMonth() + 1;

  return isFirstMonthOfDay(dayOfMonth) ? month - 1 : month;
}

//Funcion que da formato a la fecha, tanto mes como day
//Recibe como parametro un numero
function formatDate(date) {
  if (String(date).length < 2) date = '0' + date;

  return date;
}

//Funcion que retorna el corriente año
function getCurrentYear() {
  var year = new Date().getFullYear();
  var currentMonth = new Date().getMonth();
  var day = new Date().getDate() - 1;

  return currentMonth == 0 && day == 1 ? year - 1 : year;
}

function Main() {
  const months = [
    'ENERO',
    'FEBRERO',
    'MARZO',
    'ABRIL',
    'MAYO',
    'JUNIO',
    'JULIO',
    'AGOSTO',
    'SEPTIEMBRE',
    'OCTUBRE',
    'NOVIEMBRE',
    'DICIEMBRE',
  ];
  var date = new Date();
  var dayOfWeek = 1; //date.getDay(); //lunes-domingo(1-7)
  var dayOfMonth = 11; //date.getDate(); //1-31

  var lastDay = getLastDay(dayOfWeek, dayOfMonth);
  var lastMonth = getLastMonth(dayOfMonth);

  folder1 = 'CIERRE_' + getCurrentYear();
  folder2 = months[lastMonth - 1] + '_' + getCurrentYear();
  folder3 = '' + formatDate(lastDay) + formatDate(lastMonth) + getCurrentYear();

  var path = 'MainPath' + '/' + folder1 + '/' + folder2 + '/' + folder3;

  var fileMov21 =
    'Mov_021_' +
    getCurrentYear() +
    formatDate(lastMonth) +
    formatDate(lastDay) +
    '.txt';
  var fileMaestro21 =
    'Maestro_021_' +
    getCurrentYear() +
    formatDate(lastMonth) +
    formatDate(lastDay) +
    '.txt';

  console.log(`El archivo Mov21 es: ${fileMov21}`);
  console.log(`El archivo Maestro21 es: ${fileMaestro21}`);
  console.log(`La ruta es: ${path}`);
}

Main();

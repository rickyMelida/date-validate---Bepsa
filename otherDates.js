/*var fechaNacimiento = verifyDate(FECHA_NACIMIENTO);
var fechaBloqueo = verifyDate(FECHA_BLOQUEO)
var fechaEmb = verifyDate(FECHA_EMB);
var fechaEntr = verifyDate(FECHA_ENTR);
var fechaPedido = verifyDate(FECHA_PEDIDO);
var fechaBaja = verifyDate(FECHA_BAJA);
var fechaActivacion = verifyDate(FECHA_ACTIVACION);
var fechaHastaPMin = verifyDate(FECHA_HASTA_P_MIN);
var fechaUltCierre = verifyDate(FECHA_ULT_CIERRE);
var ultVencimiento = verifyDate(ULT_VENCIMIENTO);
var ultMov = verifyDate(ULT_MOV);
var fechaUltimoPago = verifyDate(FECHA_ULTIMO_PAGO);
var fechaBajaCuenta = verifyDate(FECHA_BAJA_CUENTA);*/
var fechaGeneracionArchivo = verifyDate('2022315'); //FECHA_GENERACION_ARCHIVO);

console.log(fechaGeneracionArchivo);

///----------------------------------------------------------------------FUNCION QUE VALIDA LA FECHA
function verifyDate(theDate) {
  const date = new Date();
  var year = '1900';
  var month = '01';
  var day = '01';

  if (theDate.length == 8) {
    year = theDate.substr(0, 4);
    month = theDate.substr(4, 2);
    day = theDate.substr(6, 2);
  }

  if (theDate.length == 7) {
    year = theDate.substr(0, 4);
    if (date.getMonth() + 1 <= parseInt(theDate.substr(4, 2))) {
      month = '0' + theDate.substr(4, 1);
      day = theDate.substr(5, 2);
    } else {
      month = theDate.substr(4, 2);
      day = '0' + theDate.substr(6, 1);
    }
  }
  console.log(`anio: ${year} - mes: ${month} - dia: ${day}`);
  if (theDate.length == 6) {
    year = theDate.substr(0, 4);
    month = '0' + theDate.substr(4, 1);
    day = '0' + theDate.substr(5, 1);
  }

  return validateYear(year) && validateMonth(month) && validateDay(day, month)
    ? day + '/' + month + '/' + year
    : new Date('01/01/1900');
}

///----------------------------------------------------------------------FUNCION QUE VALIDA EL AÑO
function validateYear(year) {
  const date = new Date();
  return year.length == 4 && year >= 1900 && year <= date.getFullYear()
    ? true
    : false;
}

///----------------------------------------------------------------------FUNCION QUE VALIDA EL MES
function validateMonth(month) {
  if (month.length >= 2)
    return Number(month) <= 12 && Number(month) >= 1 ? true : false;

  if (month.length == 1)
    return Number(month) <= 12 && Number(month) >= 1 ? true : false;
}

///----------------------------FUNCION QUE VALIDA EL DIA
function validateDay(day, month) {
  const monthsOf31 = [1, 3, 5, 7, 8, 10, 12];
  const monthsOf30 = [4, 6, 9, 11];

  var lastDayOfMonth = searchDay(monthsOf30, month)
    ? 30
    : searchDay(monthsOf31, month)
    ? 31
    : 28;

  if (day.length >= 2)
    return Number(day) <= lastDayOfMonth && Number(day) >= 1 ? true : false;

  if (day.length == 1)
    return Number(month) <= 12 && Number(day) >= 1 ? true : false;
}

///----------------------------------------------------------------------FUNCION QUE VALIDA EL ULTIMO DIA SEGUN EL MES
function searchDay(listMonths, month) {
  var result = false;
  for (var i = 0; i < listMonths.length; i++) {
    if (listMonths[i] == month) result = true;
  }

  return result;
}

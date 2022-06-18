/*function calculateDaysBetweenDates(begin, end) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(begin);
  var secondDate = new Date(end);

  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
}  

function getDateFromString(dateString) {
  var date = new Date(dateString);
  return date;
}*/

//convertir minutos a horas 
function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const minutos = minutes % 60;
   // return hours + ":" + minutes;
    return `${minutes} minutos son ${hours} horas  con  ${minutos}  minuto `; 
}

console.log(convertMinutesToHours(140));

/*
function calculateNumberPair(number) {
    if (number % 2 == 0) {
        return true;
    } else{
        return false;
    }
        
    } */




  
/*
    let numero = prompt("Ingrese un numero");
    function calculateNumberTriple(numero) {
        if (number % 3 == 0) {
            return true;
        } else{
            return false;
        }
    }
*/
        

//console.log(calculateDaysBetweenDates('01/01/2014', '07/04/2022'));
//console.log(getDateFromString('01/01/2014'));
//console.log(calculateNumberPair(100));
//console.log(calculateNumberTriple(6));
//console.log(calculateNumberPair(number));
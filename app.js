// aplicacion para saber si un numero es par o impar
document.getElementById("myBtn").addEventListener("click", numeroPar);

function numeroPar() {
    const numero = document.getElementById("numero").value;
    const numero_resultado = document.getElementById("numero_resultado");
    if (numero == ""){
        numero_resultado.innerHTML = "Ingresa un numero";
    }
    else if (numero % 2 == 0){
        numero_resultado.innerHTML = `El numero ${numero} es par`;
    }
    else {
        numero_resultado.innerHTML = `El numero ${numero} es impar`;
    }

}

document.getElementById("myBtn2").addEventListener("click", borrar);
function borrar() {
    document.getElementById("numero").value = "";
    document.getElementById("numero_resultado").innerHTML = "";
}



//convertir minutos a horas
document.getElementById("myBtn3").addEventListener("click", convertMinutesToHours);
function convertMinutesToHours() {
    const minutes = document.getElementById("minutos").value;
    const minutes_resultado = document.getElementById("minutes_resultado");
    if (minutes == ""){
        minutes_resultado.innerHTML = "Ingresa un numero";
    }
    else {
        minutes_resultado.innerHTML = `${minutes} minutos son ${Math.floor(minutes / 60)} horas con ${minutes % 60} minutos`;
    }
}

document.getElementById("myBtn4").addEventListener("click", limpiar);
function limpiar() {
    document.getElementById("minutos").value = "";
    document.getElementById("minutes_resultado").innerHTML = "";
}
    
//convertir horas a minutos
document.getElementById("myBtn4").addEventListener("click", convertHoursToMinutes);
function convertHoursToMinutes() {
    const hours = document.getElementById("hours").value;
    const hours_resultado = document.getElementById("hours_resultado");
    if (hours == ""){
        hours_resultado.innerHTML = "Ingresa un numero";
    }
    else {
        hours_resultado.innerHTML = `${hours} horas son ${hours * 60} minutos`;
    }
}
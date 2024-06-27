const hora = document.getElementById("hora");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");




setInterval(() => {
    const datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let sec = datetoday.getSeconds();

    if(sec<10) sec="0"+ sec;
       
    hora.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
}, 1);
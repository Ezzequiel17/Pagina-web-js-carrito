//Trabajo-Ezequiel montenegro//
//modo noche//
let btn = document.getElementById("btn"),
    caja = document.getElementById("caja"),
    contador = 0;
//funcion cambio//
function cambio() {
    if (contador == 0) {
        caja.classList.add("dark");
        contador = 1;
    } else {
        caja.classList.remove("dark")
        contador = 0;
    }
};

btn.addEventListener("click", cambio, true);
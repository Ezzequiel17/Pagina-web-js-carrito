//__//

/*
function guardardatos(e) {
    e.preventdefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;


    listadoform.push(new pelicula(nombre,correo,telefono,mensaje));
    localStorage.setItem("listadoform",JSON.stringify(listadoform));
    mostrarform(listadoform);
}

function mostrarform(listadoform){
    let listado = document.getElementById("tabla");
    listado.textContent="";
    for (const formulario of listadoform){
        let div = document.createElement("div");
        div.innerHTML=`
        div class = "tarjeta">
        <h3>${formulario.nombre}</h3>
        <p>${formulario.correo}</p>
        <p>${formulario.telefono}</p>
        <p>${formulario.mensaje}</p>
        `
    }
}

function mostrarform(){
    document.getElementById("tabla").classList.toggle("table");
}

let formulario = document.getElementById("form");
formulario.addEventListener("submit",guardardatos);

let formulariolistado = cargarlistado();
*/

//let header = document.getElementById("menunav");
// Contenido innerhtml vacio //
//header.innerHTML = ``


//funcion abonarentrada//
// function abonarEntrada() {
//   let ingres = 1;
//   let precio = Number(prompt('Debe abonar un dolar para entrar'));
//   while (ingres != precio) {
//     alert("!Tiene que pagar el dolar ¡");
//     precio = prompt('!Vuelva a poner el monto¡');
//   }
//   return ' Usted abono ' + precio + ' Dolar puede pasar ';
// }

//(abonarEntrada);


// function preguntarEdad() {
//   let edad = parseInt(prompt("A continuacion le pediremos que ingrese su edad"));

//   while (edad <= 12) {
//     alert("!No puedes ingresar si eres una persona menor de edad¡");
//     edad = prompt("!Vuelva a poner su edad, le recomiendo que venga con un adulto¡");
//   }

//   if (edad >= 18) {
//     alert("Puedes ingresar");
//   }
// }

//funcion producto//
// function producto() {
//   producto = prompt('¿Que producto desea comprar?');
//   alert(' Usted eligio el producto ' + producto);
// };

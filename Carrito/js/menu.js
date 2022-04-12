// TRABAJO - "EZEQUIEL MONTENEGRO" //
//SWEETALERT//
Swal.fire({
  title: 'Bienvenido al carrito de compra',
  text: '¿Desea continuar?',
  background: 'blue',
  padding: '1rem',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: '!Si quiero continuar!',
  cancelButtonText: '¡No quiero continuar!',
  imageUrl: 'https://i.gifer.com/F46n.gif',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Puede comprar',
      'Eliga lo que usted quiera',
      'success'
    )
  } else if (
    result.dismiss === Swal.DismissReason.cancel
  ) {
    Swal.fire(
      'Gracias vuelva pronto',
      'Lo esperamos Otro dia :)',
      'error'
    )
  }
})

// Construccion de cambia mi color //
document.getElementById("boton").onclick = function () {
  let color = document.getElementById("color").value;
  if (color == "azul") {
    document.getElementById("titulo").classList.add("text-primary");
  } else if (color == "rojo") {
    document.getElementById("titulo").classList.add("text-danger");
  } else {
    document.getElementById("titulo").classList.add("text-warning");
  }
}
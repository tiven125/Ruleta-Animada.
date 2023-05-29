var arregloNumeros = []; // Arreglo para almacenar los números aleatorios
var numerosGenerados = 0; // Contador de números generados
var numeroGanador,
  numeroRaspa1,
  numeroRaspa2,
  numeroRaspa3,
  numeroRaspa4,
  numeroRaspa5,
  numeroAleatorio;

GenerarNumeros = () => {
  // Generar 5 números aleatorios sin repetirse
  while (numerosGenerados < 6) {
    numeroAleatorio = Math.floor(Math.random() * 2000) + 1; // Generar número aleatorio entre 1 y 1000

    if (arregloNumeros.indexOf(numeroAleatorio) === -1) {
      // Verificar si el número generado no está en el arreglo
      arregloNumeros.push(numeroAleatorio); // Agregar el número generado al arreglo
      numerosGenerados++; // Incrementar el contador de números generados
    }
  }

  console.log("Los 6 números aleatorios generados son:");
  console.log(arregloNumeros); // Mostrar los números aleatorios en consola

  numeroGanador = arregloNumeros[0];
  numeroRaspa1 = arregloNumeros[1];
  numeroRaspa2 = arregloNumeros[2];
  numeroRaspa3 = arregloNumeros[3];
  numeroRaspa4 = arregloNumeros[4];
  numeroRaspa5 = arregloNumeros[5];
};

GenerarNumeros();

abrirSpeener = () => {
  var nuevaVentana = window.open("src/html/Spinner.html", "_blank");
  setTimeout(function () {
    // Cerrar la ventana abierta
    nuevaVentana.close();
  }, 3000);
};

// Direccionar sigue Intentando

function redireccionarSigueIntentando() {
  var sigueIntentando = window.open("src/html/resultado..html", "_blank");
  setTimeout(function () {
    // Cerrar la ventana abierta
    sigueIntentando.close();
  }, 20000);
}

// Direccionar Has Ganado Raspa

function redireccionarHasgandoRaspa() {
  var hasGanadoRaspa = window.open("src/html/resultado_.html", "_blank");
  setTimeout(function () {
    // Cerrar la ventana abierta
    hasGanadoRaspa.close();
  }, 20000);
}

// Has Ganado el acomulado

function redireccionarHasGanado() {
  var hasGanado = window.open("src/html/resultado.html", "_blank");
  setTimeout(function () {
    // Cerrar la ventana abierta
    hasGanado.close();
  }, 20000);
}

function Validar() {
  var numeroAleatorio = Math.floor(Math.random() * 15) + 1;
  console.log(numeroAleatorio);
  if (numeroGanador === numeroAleatorio) {
    // alert(`Has ganado`);
    redireccionarHasGanado();
    GenerarNumeros();
  } else if (
    numeroRaspa1 === numeroAleatorio ||
    numeroRaspa2 === numeroAleatorio ||
    numeroRaspa3 === numeroAleatorio ||
    numeroRaspa4 === numeroAleatorio ||
    numeroRaspa5 === numeroAleatorio
  ) {
    // alert(`Has ganado Raspa`);
    abrirSpeener();
    setTimeout("redireccionarHasgandoRaspa()", 3000);
  } else {
    // alert(`Sigue intentando`);
    abrirSpeener();
    setTimeout("redireccionarSigueIntentando()", 3000);
  }
}

// MODAL

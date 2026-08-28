let edadActual = 16;
let edadMaxima = 80;
let snack = "papas fritas";
let snacksPorDia = 2;
let precioSnack = 1000;

function calcular() {

    // Calculamos los años restantes
    let añosRestantes = edadMaxima - edadActual;

    // Calculamos la cantidad de snacks
    let cantidadFinal = añosRestantes * 365 * snacksPorDia;

    // Calculamos el gasto total
    let gastoTotal = cantidadFinal * precioSnack;

    // Mostramos los resultados
    document.getElementById("cantidad").textContent =
        `Necesitarás ${cantidadFinal.toLocaleString()} paquetes de ${snack} para que te alcancen hasta los ${edadMaxima} años.`;

    document.getElementById("gasto").textContent =
        `Vas a gastar $${gastoTotal.toLocaleString()} en ${snack} a lo largo de tu vida.`;
}

// Ejecutamos la función al cargar la página
calcular();
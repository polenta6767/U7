let edadActual = 16;
let edadMaxima = 80;
let snack = "papas fritas";
let snacksPorDia = 2;
let precioSnack = 1000;

// Calculamos los años restantes
let añosRestantes = edadMaxima - edadActual;

// Calculamos la cantidad de snacks
let cantidadFinal = añosRestantes * 365 * snacksPorDia;

// Calculamos el gasto total
let gastoTotal = cantidadFinal * precioSnack;

alert(`Necesitarás ${cantidadFinal} de ${snack} para que te alcancen hasta los ${edadMaxima} años.`);

alert(`Vas a gastar $${gastoTotal} en ${snack} a lo largo de tu vida.`);
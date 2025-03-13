function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero";
        }
        return num1 / num2;
    }
} 

let continuar = true;
while (continuar) {
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:").toLowerCase();
    
    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. Hasta luego!");
        break;
    }

    if (!["suma", "resta", "multiplicacion", "division"].includes(operacion)) {
        alert("Error: Operación no válida. Terminando el programa.");
        break;
    }

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    let resultado = realizarOperacion(num1, num2, operacion);
    alert("El resultado de la " + operacion + " es: " + resultado);
    
    let respuesta = prompt("¿Desea realizar otra operación? (si/no)").toLowerCase();
    if (respuesta !== "si") {
        alert("Gracias por usar la calculadora. Hasta luego!");
        continuar = false;
    }
}
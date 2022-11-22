const operaciones = {};

function sumar(num1, num2) { return num1 + num2 };
function restar(num1, num2) { return num1 - num2 };
function multiplicar(num1, num2) { return num1 * num2 };
function dividir(num1, num2) {
    if (num2 === 0) {
        return console.log("no se puede dividir por cero");
    } else {
        return num1 / num2
    };
}

operaciones.sumar = sumar;
operaciones.restar = restar;
operaciones.multiplicar = multiplicar;
operaciones.dividir = dividir;

module.exports = operaciones;   

// Fábrica de funciones para operaciones matemáticas
function createMathOperation(operationName) {
  // La función devuelta toma dos operandos y realiza la operación especificada
  return function (operand1, operand2) {
    switch (operationName) {
      case 'sum':
        return operand1 + operand2;
      case 'difference':
        return operand1 - operand2;
      case 'product':
        return operand1 * operand2;
      case 'quotient':
        // Verificar si el divisor no es cero antes de la división
        return operand2 !== 0 ? operand1 / operand2 : 'Error: División por cero';
      default:
        return 'Operación no soportada';
    }
  };
}

// Crear funciones específicas con la fábrica
let addNumbers = createMathOperation('sum');
let subtractNumbers = createMathOperation('difference');
let multiplyNumbers = createMathOperation('product');
let divideNumbers = createMathOperation('quotient');

// Realizar operaciones con las funciones creadas
console.log(addNumbers(5, 3));        // Suma: 8
console.log(subtractNumbers(8, 3));   // Resta: 5
console.log(multiplyNumbers(4, 6));   // Multiplicación: 24
console.log(divideNumbers(10, 2));     // División: 5
console.log(divideNumbers(8, 0));      // Error: División por cero

const lines = prompt('Digite os Valores de entrada').split(' ');

const [A, B] = lines.map(Number);
const SOMA = A + B;
console.log(`SOMA = ${SOMA}`);
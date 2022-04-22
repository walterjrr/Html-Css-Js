const lines = prompt('Digite os Valores de entrada').split(' ');

const [A, B] = lines.map(Number);
const PROD = A * B;
console.log(`PROD = ${PROD}`);
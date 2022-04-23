const lines = prompt('Digite os Valores de entrada').split(' ');

const [A, B, C, D] = lines.map(Number);
const DIFERENCA = (A*B - C*D);

console.log(`DIFERENCA = ${DIFERENCA}`)
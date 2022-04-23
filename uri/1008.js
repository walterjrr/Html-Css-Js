const lines = prompt('Digite os Valores de entrada').split(' ');

const [A, B, C] = lines.map(Number);
const SALARY = (B*C);

console.log(`NUMBER = ${A}`)
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`)
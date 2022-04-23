const lines = prompt('Digite os Valores de entrada').split(' ');

const A = lines;
const [B, C] = lines.map(Number)

const SALARIO = (((C*100)*1.5)/1000) + B;

console.log(A)
console.log(`TOTAL = R$ ${SALARIO.toFixed(2)}`)
const lines = prompt('Digite os Valores de entrada').split(' ');

const [A, B] = lines.map(Number);

const C = (A/B)

console.log(`${C.toFixed(3)}`)
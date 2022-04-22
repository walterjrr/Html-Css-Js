const lines = prompt('Digite os Valores de entrada').split(' ');
const [A, B] = lines.map(Number);
const MEDIA = (A*3.5 + B*7.5)/11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`)
const lines = prompt('Digite os Valores de entrada').split(' ');

const raio = Number(lines[0]);
const N = 3.14159

const Area = N * raio**2;

console.log("A="+Area.toFixed(4))
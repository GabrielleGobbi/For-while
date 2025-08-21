import {showNumbersToN} from '../implementacao/1-showNumbersToN';
function showNumbersToN(n: number): void {

  if (n < 0) {
    console.log("Por favor, forneça um número não negativo.");
    return;
  }

  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
console.log("Exemplo para N = 5:");
showNumbersToN(5);
console.log("\nExemplo para N = 10:");
showNumbersToN(10);
console.log("\nExemplo para N = 3:");
showNumbersToN(3);

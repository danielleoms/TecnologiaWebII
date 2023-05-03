/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.*/

var sal = 5000
var percentualreajuste = 10

aumento = sal * percentualreajuste/100
salnovo = aumento + sal

console.log("O salario novo no funcionário é de:", salnovo)
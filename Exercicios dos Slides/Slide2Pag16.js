/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor.*/
var carro = 40000;
var PercDist = 28/100;
var Imposto = 45/100;

CustFab = carro * PercDist;
ImpostoFinal = carro * Imposto;

CarroNovo = carro + CustFab + ImpostoFinal;

console.log("O valor final do carro é de:", CarroNovo);



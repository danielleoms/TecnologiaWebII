// Array com os carros em estoque
let estoque = ['Compass', 'Renegade', 'Outlander', 'Tracker', 'Duster'];

// Cliente comprou o Tracker
estoque.splice(estoque.indexOf('Tracker'), 1);

// Novo carro adquirido
estoque.push('Onix');

// Cliente se interessou pelo Compass, mas foi retirado do estoque
estoque.splice(estoque.indexOf('Compass'), 1);

// Cliente comprou o Outlander e trocou por uma Pajero TR4
estoque.splice(estoque.indexOf('Outlander'), 1);
estoque.push('Pajero TR4');

// Dono da loja comprou o Tiggo 7 de um cliente
estoque.push('Tiggo 7');

// Cliente reservou a Duster, mas ainda está na loja
estoque.splice(estoque.indexOf('Duster'), 1);

// Vendedor não encontra a Duster no estoque
if (estoque.indexOf('Duster') === -1) {
  console.log('Não foi encontrado o veículo Duster no estoque.');
} else {
  console.log('O veículo Duster está disponível no estoque.');
}

// Mostrar o estoque atualizado
console.log(estoque);

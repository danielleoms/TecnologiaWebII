## Estrutura da Linguagem
* JavaScript


Estrutura da Linguagem JavaScript é composta por várias construções que permitem a criação de programas com diversas funcionalidades. Abaixo, apresentamos algumas dessas construções com exemplos:

#### Variáveis:
As variáveis em JavaScript são usadas para armazenar valores. Elas podem ser criadas usando as palavras-chave var, let ou const. Aqui está um exemplo:

          var nome = "Maria";
          let idade = 25;
          const pi = 3.14;

#### Condicionais:

As condicionais permitem executar diferentes ações dependendo de uma condição. Em JavaScript, isso é feito com as palavras-chave if, else if e else.
Aqui está um exemplo:

          let idade = 18;

          if (idade < 18) {
            console.log("Você não pode votar ainda.");
          } else if (idade >= 18 && idade < 70) {
            console.log("Você pode votar nas próximas eleições.");
          } else {
            console.log("Você já pode aposentar.");
          }

Uma das estruturas condicionais em JavaScript é o switch, que permite a execução de diferentes blocos de código de acordo com o valor de uma expressão.

Aqui está um exemplo de uso do switch em conjunto com outras declarações para criar um programa que pede ao usuário que selecione uma bebida e seus complementos:

        let bebida = prompt("Qual bebida você quer? As opções são café, chá e chocolate quente.");
        let custo = 0;

        switch (bebida) {
          case "café":
            custo = 2.0;
            break;
          case "chá":
            custo = 1.5;
            break;
          case "chocolate quente":
            custo = 2.5;
            break;
          default:
            alert("Bebida inválida.");
            break;
        }

        if (custo > 0) {
          let resposta = prompt("Quer algum complemento para sua bebida? As opções são leite, açúcar e chantilly.");

          switch (resposta) {
            case "leite":
              custo += 0.5;
              break;
            case "açúcar":
              custo += 0.25;
              break;
            case "chantilly":
              custo += 1.0;
              break;
            default:
              alert("Complemento não selecionado.");
              break;
          }

          alert("O custo da sua bebida é: R$" + custo);
        }

#### Loops:
Os loops permitem executar o mesmo bloco de código várias vezes. Em JavaScript, existem dois tipos de loops: for e while. Aqui está um exemplo:

        // loop for
        for (let i = 0; i < 5; i++) {
          console.log("O valor de i é " + i);
        }

        // loop while
        let j = 0;
        while (j < 5) {
          console.log("O valor de j é " + j);
          j++;
        }

#### Funções:
As funções são usadas para encapsular blocos de código e executá-los sempre que necessário. Em JavaScript, elas são definidas com a palavra-chave function. Aqui está um exemplo:

        function soma(a, b) {
          return a + b;
        }

        let resultado = soma(2, 3);
        console.log("O resultado da soma é " + resultado);

        Arrays:
        Os arrays são usados para armazenar coleções de valores em uma única variável. Em JavaScript, os arrays são definidos com colchetes []. Aqui está um exemplo:

                  let frutas = ["maçã", "banana", "laranja"];

                  console.log(frutas[0]); // "maçã"
                  console.log(frutas[1]); // "banana"
                  console.log(frutas[2]); // "laranja"

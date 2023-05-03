## Resumo Switch

O switch é uma estrutura de controle de fluxo em JavaScript que permite testar uma expressão em vários casos e executar um bloco de código correspondente ao primeiro caso que corresponder à expressão.

A sintaxe básica do switch é a seguinte:

              switch (expressão) {
                case valor1:
                  // bloco de código a ser executado quando a expressão é igual a valor1
                  break;
                case valor2:
                  // bloco de código a ser executado quando a expressão é igual a valor2
                  break;
                ...
                default:
                  // bloco de código a ser executado quando nenhum dos casos acima corresponder à expressão
              }

A expressão dentro do switch é avaliada e comparada com cada um dos valores dos casos. Se a expressão corresponder a um dos valores, o bloco de código correspondente será executado. Se não houver correspondência, o bloco de código no default será executado.

O uso do break é importante para evitar a execução dos blocos de código de casos seguintes ao caso correspondente.

O switch é uma alternativa ao uso de múltiplos if e else if encadeados, e pode tornar o código mais legível e conciso em casos em que se precisa testar uma expressão em várias opções.

#### 1) O que é a estrutura switch em JavaScript e para que ela é usada?
A estrutura switch em JavaScript é uma construção de controle de fluxo que permite testar um valor em uma expressão e, em seguida, executar um bloco de código com base em cada caso correspondente a um valor específico. É geralmente usada quando há muitas condições possíveis para testar.

#### 2) Como a estrutura switch é diferente de uma série de instruções if/else aninhadas?
A estrutura switch é geralmente mais eficiente e mais fácil de ler do que uma série de instruções if/else aninhadas, especialmente quando há muitas condições possíveis para testar. Além disso, a estrutura switch é executada de forma mais eficiente porque é otimizada pelo motor JavaScript. No entanto, a estrutura if/else é mais flexível e pode testar condições mais complexas.

#### 3) Como você lida com um caso em que não há correspondência em uma instrução switch?
Geralmente é uma boa prática incluir um caso padrão (default) em uma instrução switch, que será executado quando não há correspondência com nenhum dos casos anteriores. O caso padrão é definido usando a palavra-chave "default". 
Por exemplo:

                  switch (valor) {
                    case 1:
                      console.log("Caso 1");
                      break;
                    case 2:
                      console.log("Caso 2");
                      break;
                    default:
                      console.log("Nenhum caso correspondente");
                  }

#### 4) É possível ter mais de uma ação para um caso em uma instrução switch? Como você faria isso?
Sim, é possível ter mais de uma ação para um caso em uma instrução switch. Para fazer isso, basta incluir várias instruções dentro do bloco de código correspondente a um caso. Por exemplo:

                switch (diaDaSemana) {
                  case "segunda-feira":
                  case "terça-feira":
                  case "quarta-feira":
                  case "quinta-feira":
                  case "sexta-feira":
                    console.log("Dia de trabalho");
                    break;
                  case "sábado":
                  case "domingo":
                    console.log("Fim de semana");
                    break;
                  default:
                    console.log("Dia inválido");
                }

#### 5) Como você pode usar uma instrução switch para verificar o tipo de uma variável em JavaScript?
Você pode usar a instrução switch para verificar o tipo de uma variável em JavaScript usando o operador typeof. Por exemplo:

                  switch (typeof variavel) {
                    case "number":
                      console.log("A variável é um número");
                      break;
                    case "string":
                      console.log("A variável é uma string");
                      break;
                    case "boolean":
                      console.log("A variável é um booleano");
                      break;
                    default:
                      console.log("O tipo da variável não é suportado");
                  }

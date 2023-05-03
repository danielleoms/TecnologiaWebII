## Operadores

Em JavaScript, os operadores são símbolos que representam uma operação matemática, lógica ou de comparação. Eles permitem manipular valores e variáveis de diferentes tipos, como números, strings e booleanos. A seguir, apresentamos uma breve descrição dos principais operadores em JavaScript:

### Operadores aritméticos:
São utilizados para realizar operações matemáticas em números, como adição (+), subtração (-), multiplicação (*), divisão (/), módulo (%) e incremento/decremento (++/--).

Exemplo:

            let a = 10;
            let b = 5;
            console.log(a + b); // 15
            console.log(a - b); // 5
            console.log(a * b); // 50
            console.log(a / b); // 2
            console.log(a % b); // 0
            a++;
            console.log(a); // 11
            b--;
            console.log(b); // 4

### Operadores de atribuição:
São utilizados para atribuir um valor a uma variável, como o operador de atribuição simples (=) e outros operadores combinados com atribuição, como adição com atribuição (+=) e subtração com atribuição (-=).

Exemplo:

          let c = 5;
          c += 3; // é o mesmo que c = c + 3;
          console.log(c); // 8
          c -= 2; // é o mesmo que c = c - 2;
          console.log(c); // 6

### Operadores de comparação: 
São utilizados para comparar dois valores e retornar um valor booleano (verdadeiro ou falso), como igual (==), diferente (!=), maior (>), menor (<), maior ou igual (>=) e menor ou igual (<=).

Exemplo:

        let d = 5;
        let e = 10;
        console.log(d == e); // false
        console.log(d != e); // true
        console.log(d > e); // false
        console.log(d < e); // true
        console.log(d >= e); // false
        console.log(d <= e); // true
       
       
### Operadores lógicos: 
São utilizados para combinar expressões lógicas e retornar um valor booleano, como E lógico (&&), OU lógico (||) e NÃO lógico (!).

Exemplo:

        let f = 5;
        let g = 10;
        let h = 15;
        console.log((f < g) && (g < h)); // true
        console.log((f > g) || (g > h)); // false
        console.log(!(f == g)); // true

### Operadores de concatenação: 
São utilizados para unir strings em JavaScript, como o operador de adição (+).

Exemplo:


            let nome = "João";
            let sobrenome = "Silva";
            console.log(nome + " " + sobrenome); // "João Silva"

### Operador ternário:
É um operador condicional que permite avaliar uma expressão e retornar um valor com base na avaliação. Ele é composto pelo operador ? e dois valores separados por : , que representam o valor retornado em caso de verdadeiro e falso, respectivamente.
Exemplo:

          let i = 5;
          let j = 10;
          let resultado = (i < j) ? "i é menor que j" : "i é maior ou igual a j";
          console.log(resultado); //


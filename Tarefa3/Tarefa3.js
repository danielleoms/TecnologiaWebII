valido = true
verdadeiro = true
custo = 0

while(valido){
    bebida = prompt("Qual bebida você quer? As opções são café, chá e chocolate quente.")
    switch(bebida){
        case "café":
            alert("Você selecionou café.");
            custo = 2.0;
            valido = false;
            break;
        case "chá":
            alert("Você selecionou chá.");
            custo = 1.5;
            valido = false;
            break;
        case "chocolate quente":
            alert("Você selecionou chocolate quente.");
            custo = 2.5;
            valido = false;
            break;
         default:
            alert("Item inválido.")
    }
}

    while(verdadeiro){
    complemento = prompt("Quer algum complemento para sua bebida? As opções são leite, açúcar e chantilly.")

    switch(complemento){
        case "leite":
            alert("Você selecionou leite.");
            custo += 0.5;
            verdadeiro = false;
            
            
        case "açúcar":
            alert("Você selecionou açúcar.");
            custo += 0.25;
            verdadeiro = false;
            break;
            
        case "chantilly":
            alert("Você selecionou chantilly.");
            custo += 1.0;
            verdadeiro = false;
            break;
            
        default:
            alert("Complemento não selecionado.");
    }
}

alert("O custo da sua bebida é: R$" + custo)

/*
while(verdadeiro){
    complemento = prompt("Quer algum complemento para sua bebida? As opções são leite, açúcar e chantilly.")
    switch(complemento){
        case "leite":
            alert("Você selecionou leite.");
            custo += 0.5;
            verdadeiro = false;
            break;
            
        case "açúcar":
            alert("Você selecionou açúcar.");
            custo += 0.25;
            verdadeiro = false;
            break;
            
        case "chantilly":
            alert("Você selecionou chantilly.");
            custo += 1.0;
            verdadeiro = false;
            break;
            
        default:
            alert("Complemento não selecionado.");
    }
}
*/
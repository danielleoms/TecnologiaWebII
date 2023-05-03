/*Uma empresa deseja fazer palestras separadas com assuntos diversos para cada tipo de funcionário em sua empresa.
Nesse sentido, se o funcionário é da área de TI e é Gerente deve ir para sala 404.
Se o funcionário é da área de TI e é desenvolvedor back end deve ir para sala 403. 
Se o funcionário é da área de TI e é Desenvolvedor front end deve ir para sala 402.
Se o funcionário é da área de Suporte e é de redes deve ir para sala 401.
Se o funcionário não for de nenhuma das áreas citadas ele deve ir para sala 400.*/


valido = true
while(valido){
    setores = prompt("Qual a sua área de atuação? 1 - Gerente de TI; 2 - Setor de Backend; 3 - Setor de Fronted; 4 - Suporte ou redes.")
    switch(setores){
    case "1":
        alert("Você deve ir para a sala 404.");
        break;
    case "2":
        alert("Você deve ir para a sala 403.");
        break;
    case "3":
        alert("Você deve ir para a sala 402.");
        break;
    case "4":
        alert("Você deve ir para a sala 401.");
        break;
    default:
        alert("Vá para a sala 400.")
}
}
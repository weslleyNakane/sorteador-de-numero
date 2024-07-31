function sortear(){
    let quantidade =parseInt(document.getElementById ("quantidade").value);
    let de =parseInt(document.getElementById ("de").value);
    let ate=parseInt(document.getElementById ("ate").value);

    let sorteados = [];
    let numero;
// loop para gerar numero aleatorio inteiro
    for (let i =0 ; i <quantidade;i++){
        numero = numeroAleatorio (de , ate);
        //enquanto o numero for repetido sortea de novo
        while (sorteados.includes(numero)){ 
            numero = numeroAleatorio (de , ate);
    
        }
        sorteados.push (numero);
        // colocando protecao para nao colocar a quantidade maior que o numero maximo sorteado
        if(quantidade > ate){
        alert(`a quantidade de numero deve ser inferior a ${ate}`);
            return;
        }
        if (quantidade > (ate - de + 1)) {
            alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
            return;
          }
        
    }


    let resultado = document.getElementById("resultado");
    resultado.innerHTML = (`<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`);
    alterarStatusBotao();
}
// gerador de numero aleatorio inteiro
function numeroAleatorio (min, max){ 
    return Math.floor (Math.random () * (max - min + 1)) +min;
    

}
//abilitando o botao que estava desabilitado
function alterarStatusBotao(){
    let botao =document.getElementById ("btn-reiniciar");
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }

}
//vai limpar os campos 
function reiniciar(){
    document.getElementById ("quantidade").value =``;
    document.getElementById ("de").value = ``;
    document.getElementById ("ate").value= ``;
    document.getElementById ("resultado").innerHTML=`<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alterarStatusBotao();
}

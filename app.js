let numeroSecreto = gerarNumeroAleatorio ();

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do número sercreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    console.log(numeroSecreto)
}

function gerarNumeroAleatorio (){
    return parseInt(Math.random () * 10 + 1);
}
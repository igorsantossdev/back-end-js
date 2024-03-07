let nome;
nome = prompt ("digite o seu nome: ");
console.log (nome);
window.alert('olá ${nome}');
let numero = number.parseint(Math.random()*19 + 1);
let tentativas = 0;
let palpite = 0;

//&& -> operação lógica E
while ((palpite != numero) && (tentativas < 5)) {
    palpite = prompt ("digite um número: ");
    tentativas ++;
    if (palpite > numero){
        window.alert ("você errou! o número é maior que ${palpite} ")
    } else {
        if (palpite < numero) {
            window.alert ("você errou! o numero é maior que ${palpite}. tente outra vez!")
        }
    }
}

if (numero == palpite) {
    let palavratentativa = tentativas == 1 ? "tentativa" : "tentativas"
    /*if (tentativas == 1) {
        palavratentativa = "tentativa";
    } else {
        palavratentativa = "tentativas";
    }*/
    window.alert('parabéns ${nome}! o numero era ${numero}, e você acertou com ${tentativas} ${palavratentativa}!');
} else {
    window.alert ("você esgotou suas chances de tentativa. o número era ${numero}");
}
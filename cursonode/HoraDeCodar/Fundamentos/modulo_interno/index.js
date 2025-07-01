const meuModulo = require('./meu_modulo');

const soma = meuModulo.soma;
const subtracao = meuModulo.subtracao;
const multiplicacao = meuModulo.multiplicacao;
const divisao = meuModulo.divisao;

soma(5, 10);
subtracao(10, 5);
multiplicacao(5, 10);
divisao(10, 5);

const meuCachorro = meuModulo.meuCachorro;
meuCachorro.latir();
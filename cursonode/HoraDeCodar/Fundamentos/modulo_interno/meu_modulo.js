class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} está latindo!`);
    }
}

let meuCachorro = new Cachorro('Rex', 'Labrador');

module.exports = {
    soma(a, b) {
        console.log(`A soma de ${a} + ${b} é igual a ${a + b}`);
    },
    subtracao(a, b) {
        console.log(`A subtração de ${a} - ${b} é igual a ${a - b}`);
    },
    multiplicacao(a, b) {
        console.log(`A multiplicação de ${a} * ${b} é igual a ${a * b}`);
    },
    divisao(a, b) {
        console.log(`A divisão de ${a} / ${b} é igual a ${a / b}`);
    },
    Cachorro,
    meuCachorro
};
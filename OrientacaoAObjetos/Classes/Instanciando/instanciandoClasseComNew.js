function Pessoa(nome,idade,cpf){
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
}

let pessoa1 = new Pessoa('João',30,'123.456.789-00');
let pessoa2 = new Pessoa('Maria',25,'987.654.321-00');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.nome);
console.log(pessoa2.idade);
console.log(pessoa1.cpf);
console.log(pessoa2.nome);
console.log(pessoa1.idade);
console.log(pessoa2.cpf);
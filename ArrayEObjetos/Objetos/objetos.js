let pessoa = {
    nome: "Matson",
    idade: 30,
    profissao: "Desenvolvedor",
    habilidades: ["JavaScript", "Python", "Java"],
}

console.log(pessoa);
console.log(pessoa.nome); 
console.log(pessoa.idade); 
console.log(pessoa.profissao); 
console.log(pessoa.habilidades); 

delete pessoa.idade; 
console.log(pessoa.idade);
delete pessoa.habilidades[1];
console.log(pessoa.habilidades);

//Copiando o objeto de B para A

let a = {
    nome: "Matson",
    idade: 30,
    profissao: "Desenvolvedor",
}

let b = {
    senioridade: "Pleno",
}

Object.assign(a,b);

console.log(a);
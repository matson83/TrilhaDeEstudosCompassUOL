function Cachorro(nome,raca){
    this.nome = nome;
    this.raca = raca;
}

// O método prototype é usado para adicionar métodos a um objeto
Cachorro.prototype.latir = function(){
    console.log(`${this.nome} está latindo!`);
}

let pitbull = new Cachorro('Rex','Pitbull');

console.log(pitbull);
pitbull.latir(); 
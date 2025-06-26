class Cachorro{
    constructor(nome,raca){
        this.nome = nome;
        this.raca = raca;
    }

    latir(){
        console.log(`${this.nome} está latindo!`);
    }
}

let pitbull = new Cachorro('Rex','Pitbull');

console.log(pitbull);
pitbull.latir();
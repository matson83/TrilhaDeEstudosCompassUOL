class Cachorro{
    constructor(nome,raca,cor){
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
    }

    get verNome(){
        return this.nome;
    }

    get verRaca(){
        return this.raca;
    }

    get verCor(){
        return this.cor;
    }

    set novoNome(value){
        this.nome = value;
    }

    set novaRaca(value){
        this.raca = value;
    }

    set novaCor(value){
        this.cor = value;
    }

}

let rex = new Cachorro('Rex','Pitbull','Preto');

console.log(rex.verNome); 
console.log(rex.verRaca);    
console.log(rex.verCor); 

rex.novoNome = 'Max';
rex.novaRaca = 'Labrador';
rex.novaCor = 'Amarelo';

console.log(rex.verNome);
console.log(rex.verRaca);
console.log(rex.verCor);

class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    constructor(raca,nome,patas){
        super(patas,patas);
        this.raca = raca;
        this.nome = nome;
    }

    latir(){
        console.log('Au Au');
    }
}

class Gato extends Mamifero{
    constructor(raca,nome,patas){
        super(patas,patas);
        this.raca = raca;
        this.nome = nome;
    }

    latir(){
        console.log('Miau Miau');
    }
}

let garfield = new Gato('Persa','Garfield',4);
let snoopy = new Cachorro('Beagle','Snoopy',4);

console.log(garfield.nome);
garfield.latir();
console.log(snoopy.nome);
snoopy.latir();

//INSTANCEOF -- Verifica quem é o Pai

console.log(garfield instanceof Gato); 
console.log(snoopy instanceof Cachorro);
console.log(new Mamifero instanceof Cachorro);
console.log(new Gato instanceof Mamifero); 
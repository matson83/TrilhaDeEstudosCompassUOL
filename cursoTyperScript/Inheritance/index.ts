class Cachorro{
    constructor (public nome:string,public porte:string, public patas:number){
    }

    latir():void {
        console.log(this.nome+ ' está latindo!');
    }

}

class Bulldog extends Cachorro{
    constructor(
        public nome: string,
        public porte: string,
        public patas: number,
        readonly raca: string
    ) {
        super(nome, porte, patas);
    }
}

let dog1 = new Bulldog('Rex', 'Médio', 4, 'Bulldog');
let dog2 = new Cachorro('Bobby', 'Pequeno', 4);
console.log(dog1);
dog1.latir();

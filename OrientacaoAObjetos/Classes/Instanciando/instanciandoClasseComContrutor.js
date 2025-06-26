function criaClasseCachorro(raca,patas,cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let labrador = criaClasseCachorro('Labrador',4,'Amarelo');
let pitbull = criaClasseCachorro('Pitbull',4,'Branco');

console.log(labrador);
console.log(pitbull);
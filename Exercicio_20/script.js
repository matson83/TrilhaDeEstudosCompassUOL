function verificaIdade(Idade){
    if (Idade >= 18 ){
        return "Pode entrar na autoescola";
    }else{
        return "Não pode entrar na autoescola";
    }
} 

console.log(verificaIdade(20));
console.log(verificaIdade(17));
console.log(verificaIdade(18));
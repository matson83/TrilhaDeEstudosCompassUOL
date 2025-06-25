function verificaTamanhoDaString(texto){
    if(texto.length > 10){
        return "Texto muito longo";
    }else if(texto.length <= 10 ){
        return "Texto dentro do tamanho permitido";
    }else if(texto.length == null){
        return "Texto vazio";
    }
}

console.log(verificaTamanhoDaString("Olá, mundo!"));
console.log(verificaTamanhoDaString("Olá!"));
console.log(verificaTamanhoDaString(""));
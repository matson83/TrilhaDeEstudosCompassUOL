function verificaDadoPassado(dado){
    if (typeof dado === 'number') {
        return 'O dado passado é do tipo number';
    }else if (typeof dado ===  'string') {
        return 'O dado passado é do tipo string';
    }else if (typeof dado === 'boolean') {
        return 'O dado passado é do tipo boolean';      
    }else{
        return 'O dado passado não é do tipo number, string ou boolean';
    }    
}

console.log(verificaDadoPassado(10));
console.log(verificaDadoPassado('string')); 
console.log(verificaDadoPassado(true));
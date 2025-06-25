function transformaEmPositivo(numero){
    if (numero < 0 ){
        return Math.abs(numero);
    }else{
        return "O numero "+ numero + " já é positivo";
    }
}

console.log(transformaEmPositivo(-50));
console.log(transformaEmPositivo(10));
console.log(transformaEmPositivo(0));
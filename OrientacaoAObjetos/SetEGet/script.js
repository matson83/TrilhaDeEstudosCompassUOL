const pessoa = {
    nome : "Matson",
    idade : 21,
    profissao : "Desenvolvedor",
    habilidades : ["JavaScript", "Python","Java"],

    //SET = DEFINIR
    setPessoa:function(nome,idade,profissao,habilidades){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.habilidades = habilidades;
    },

    //GET = PEGAR
    getPessoa:function(){
        return "Os seu nome é :" +this.nome +
        ", sua idade é :" + this.idade +
        ", sua profissão é :" + this.profissao +
        ", suas habilidades são :" + this.habilidades.join(", ");  
    }

}

console.log(pessoa.getPessoa());
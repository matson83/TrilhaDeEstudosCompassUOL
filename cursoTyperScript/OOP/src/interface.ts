interface Item{
    nome :string
    preco :number

    itemMessage(message:string):void

}

let product1 :Item

product1 = {
    nome: 'Notebook',
    preco: 2500,
    itemMessage(message:string) {
        console.log(`O produto ${this.nome} custa R$${this.preco}. Mensagem: ${message}`);
    },
}

product1.itemMessage('Este é um ótimo produto!');
"use strict";
let product1;
product1 = {
    nome: 'Notebook',
    preco: 2500,
    itemMessage(message) {
        console.log(`O produto ${this.nome} custa R$${this.preco}. Mensagem: ${message}`);
    },
};
product1.itemMessage('Este é um ótimo produto!');

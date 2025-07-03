"use strict";
class Users {
    constructor(n, b) {
        this.nome = n;
        this.balance = b;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
const user1 = new Users('Matson', 1000);
user1.deposit(100);
console.log(user1);

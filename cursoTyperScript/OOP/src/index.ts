class Users{
    nome:string
    balance:number

    constructor(n:string,b:number){
        this.nome = n
        this.balance = b
    }
    
    deposit(amount:number){
        this.balance += amount
    }

}

const user1 = new Users('Matson',1000);
user1.deposit(100)
console.log(user1);
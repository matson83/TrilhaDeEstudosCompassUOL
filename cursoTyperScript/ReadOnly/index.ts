class Movies{
    
    constructor(
        readonly id:number, 
        public title:string
    ){}
}

const movie1 = new Movies(1, 'Inception');
console.log(movie1.id); 
// movie1.id = 4
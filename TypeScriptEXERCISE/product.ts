class Product {
    id: number;
    name: string;
    amount: number;
    private stock: number;

    constructor(id: number, name: string, amount: number, stock: number){
        this.id = id;
        this.amount = amount;
        this.name = name;
        this.stock = stock;
    }

    get getStock(): number{
        return this.stock;
    }
    set setStock(stock: number){
        this.stock = stock;
    }

    increaseStock(inc: number): string{
        this.stock = this.stock + inc;
        return(`New Stock is ${this.stock}`);
    }

    decreaseStock(dec: number): string{
        this.stock = this.stock - dec;
        return(`New Stock is ${this.stock}`);
    }
}


let product1 = new Product(1,"shirt",500,200);
let product2 = new Product(1,"pant",1000,250);
let product3 = new Product(1,"t-shirt",300,500);
let product4 = new Product(1,"hoodie",1500,150);
let product5 = new Product(1,"shorts",400,300);

console.log(product1.increaseStock(10));
console.log(product2.decreaseStock(20));

console.log(product1.getStock);
// Exercício 1
class Product {
    constructor(name, price, unit){
        this.name = name;
        this.price = price;
        this.unit = unit;
    }

    showDetails() {
        console.log(`Detalhes do produto: Nome: ${this.name}; Unidade de medida: ${this.unit}; Preço por unidade: $${this.price}`);
    }
}

class Cart {
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }

    addToCart() {
        let total = this.product.price * this.quantity; 
        console.log(`Adicionado ${this.product.name} ${this.quantity} ${this.product.unit} ao carrinho. O valor total é de $${total}`); 
    }
}

const produto1 = new Product("Tapete", 10, "metros");
produto1.showDetails();
const cart1 = new Cart(produto1, 2);
cart1.addToCart();
//Aplicação do princípio da Responsabilidade Única(S)
class Product {
    name;
    price;
    unit;

    constructor(name, price, unit){
        this.name = name;
        this.price = price;
        this.unit = unit;
    }

    showDetails() {
        console.log(`Detalhes do produto: Nome: ${this.name} - Preço: R$ ${this.price},00`);
        console.log(`Quantidade de produto ${this.unit}`);
    }    
}

class Cart {
    product;
    quantity;

    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;

    }

    addToCart() {
        const total = this.product.price * this.quantity;
        console.log(`Adiciono ${this.quantity} ${this.product.unit} ao carrinho.
        O valor total é: R$ ${total},00`);
    }
}

const product1 = new Product("Garrafa de café", 100, "unidade");
product1.showDetails();
const cart1 = new Cart(product1, 2);
cart1.addToCart();
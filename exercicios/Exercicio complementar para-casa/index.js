// arquivo para testes do exercicio exercicio-em-aula.md

// 1.
class Product {

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    showDetails() {
        console.log(`Nome: ${this.name} \nPreço: ${this.price}`);
    }

}

class Cart {
    constructor() {
        this.products = [];
    }

    calculateTotalValue(unitPrice, quantity) {
        return unitPrice * quantity
    }

    addToCart(product, quantity) {
        this.products.push({product, quantity})
        console.log(`Adiciono ${quantity} do produto ${product.name} ao carrinho. \n
        Preço total: ${this.calculateTotalValue(product.price, quantity)}`);
    }
}

const AlbumDoMamamoo = new Product("Álbum do Mamamoo", 200)
AlbumDoMamamoo.showDetails()
const novaCompra = new Cart()
novaCompra.addToCart(AlbumDoMamamoo, 1)




// 2.
// 3.
// 4.
// 5.
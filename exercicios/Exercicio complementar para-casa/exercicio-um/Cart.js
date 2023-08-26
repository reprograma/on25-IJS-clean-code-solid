const Product = require('./Product');

class Cart {
  products = [];

  addToCart(product, quantity) {
    if(!(product instanceof Product)) {
      return `Só podem ser adicionados produtos ao carrinho.`
    }

    this.products.push({
      product,
      quantity
    });

    console.log(`Adiciono ${quantity} ${product.unit} ao carrinho. Total a pagar: R$ ${(quantity * product.price).toFixed("2")}`)
  }
}

module.exports = Cart;
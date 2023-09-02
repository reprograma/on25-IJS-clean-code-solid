const Product = require("./Product");

class Cart {
  products = [];

  addToCart(product, quantity) {
    if (!(product instanceof Product)) {
      return `Só podem existir produtos no carrinho. Verifique as informações e tente novamente`;
    }

    this.products.push({
      product,
      quantity,
    });

    console.log(
      `Foram adicionados ${quantity} produtos ${
        product.unit
      } ao carrinho. Seu total a pagar foi de: R$ ${(
        quantity * product.price
      ).toFixed("2")}`
    );
  }
}

module.exports = Cart;

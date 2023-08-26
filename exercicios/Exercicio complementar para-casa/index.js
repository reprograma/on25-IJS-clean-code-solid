// arquivo para testes do exercicio exercicio-em-aula.md

const Cart = require("./exercicio-um/Cart");
const Product = require("./exercicio-um/Product");

// 1.
const
  cart = new Cart(),
  product = new Product("Escova", "unidades", 5.50);

product.showDetails();
console.log("Antes de usar a função: ", cart.products)
cart.addToCart(product, 2);
console.log("Depois de usar a função: ", cart.products)

// 2.
// 3.
// 4.
// 5.
class Product {
  name;
  unit;
  price;

  constructor(name, unit, price) {
    this.name = name;
    this.unit = unit;
    this.price = price;
  }

  showProductDetails() {
    console.log(`
      name: ${this.name},
      unit: ${this.name},
      price: ${this.price}
    `);
  }
}

module.exports = Product;
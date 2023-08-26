class Product {
  name;
  unit;
  price;

  constructor(name, unit, price) {
    this.name = name;
    this.unit = unit;
    this.price = price;
  }

  showDetails() {
    console.log(`
      name: ${this.name},
      unit: ${this.unit},
      price: ${this.price}
    `)
  }
}

module.exports = Product;
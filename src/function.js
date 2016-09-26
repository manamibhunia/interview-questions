function Product(name, price) {
  this.name = name;
  this.price = price;

  this.toString = function() {
      console.log('Price of ' + this.name + ' is ' + this.price);
  }
}

Product.prototype.show = function() {
    console.log('This is product ' + this.name + ' with price ' + this.price);
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}



var cheese = new Food('feta', 5);
var fun = new Toy('robot', 4);
console.log(fun);
fun.toString();


var prod = new Product('Apple', 123)
console.log(prod);
prod.show();
prod.toString();

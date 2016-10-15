function Car(type, color, topSpeed) {
    this.type = type;
    this.color = color;
    this.topSpeed = topSpeed;
    this.drive = function() {
        console.log('Driving at ' + this.topSpeed);
    }
}

var car = new Car('four Wheel', 'red', 100);

console.log(car);
car.drive();

var Sedan = function(type, color, topSpeed) {
    Car.call(this, type, color, topSpeed);
}
Sedan.prototype = Object.create(Car.prototype);
Sedan.prototype.constructor = Sedan;

var honda = new Sedan('four Wheel', 'blue', 120);
console.log(honda.type);

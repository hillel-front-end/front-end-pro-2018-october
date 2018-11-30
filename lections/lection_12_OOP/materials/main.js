console.log('Lection 12');


// наследование, инкапсуляция, полиморфизм

function Earth(){
    // ..
}
Earth.prototype.spin = function(){}

function Animal(){
    var x = 20;
    this.FOO = 2000;
}

// Animal.prototype = new Earth();
Animal.prototype = Object.create(Earth.prototype);

Animal.prototype.sleep = function(){
    console.log('this is sleep', x);
}

// -------------------------------------------

function Dog(name, weight){
    this.name = name;
    this.weight = weight;

    var speed = 20; // privat

    // getter
    // Dog == arguments.callee
    Dog.prototype.getSpeed = function(){
        return speed;
    }

    // setter
    this.setSpeed = function(value){
        speed = value;
    }
}

// Dog.prototype = new Animal(); // 1
Dog.prototype = Object.create(Animal.prototype); // 2

Dog.prototype.bark = function(){
    console.log('this is bark', this);
}

Dog.prototype.run = function(){
    var speed = this.getSpeed();
    if(speed <= 0) {
        return console.log(this.name + 'is tired =(');
    }

    console.log(this.name + ' runs with speed', speed);
    this.setSpeed(speed - 5)
}

Dog.prototype.eat = function(value){
    this.setSpeed(value <= 20 ? value : 20);
}


// -----------------------------------

var p = new Dog('Bony', 20);
console.log(p)

p.run();
p.run();

// Object.create()

var obj = {
    x: 50,
    foo: function(){}
}

var foobar = Object.create(obj); // {}.__proto__ = obj;
foobar.x = 100;

// console.log(foobar.x);


// статические свойства класса


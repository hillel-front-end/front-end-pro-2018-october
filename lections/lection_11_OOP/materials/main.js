console.log('Lection 11');

//  ES6 - class
// OOP 


// прототипное ООП


function Human(name, age, speed){ // функция-конструктор
    var z = 200;

    this.name = name;
    this.age = age;
    if (speed != undefined) {
        this.speed = speed + z;
    }
   

    // this.run = function(){
    //     console.log(this.name + ' run, with speed -> ' + this.speed );
    // }
}

// console.log(Human.prototype);
Human.prototype.run = function(){
    console.log(this.name + ' run, with speed -> ' + this.speed );
}

var p = new Human('Vaysa', 23, 0); 
var b = new Human('Megan', 18); 
// p -> экземпляр класса Human

// var list = new Array();
console.log(p, b);

p.run();
b.run();

// for(var i = 1, item; i <= 1000; i++){
//     item = new Human('Person_' + i);
//     console.log(item.run === Human.prototype.run)
// }

console.log(p.run === b.run);

// ----------------------------------------------------

/*

 p <= Human, Animal

    class Human extends Animal{

    }

*/


console.log('Lection_20');


class Animal {
    constructor(name) {
        this.size = 10;
        this.name = name;
    }

    foo(){
        console.log('foo return something')
        return this.name;
    }

    p(){
        return 20;
    }

    static eat() {
        console.log('eat');
    }
}

// var anim = new Animal('Krokodil');
// console.log(anim, anim.foo());

// --------------

// (new Animal).foo();
// new Animal('Belka').foo();

// Animal.eat();


// -----------------------
class Human extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;

        let _counter = 200;

        this.run = function() {
            console.log(this.name, 'run', _counter);

            _counter++;
        }
        
        this.getCounter = () => _counter;
        this.setCounter = value => {
            _counter = value;
        }
    }

    static getCount(data) {
        console.log('count: ****', data.getCounter());
        return data.getCounter();
    }
    
    sleep(){
        console.log(this.name, 'sleep');
    }
}

var p1 = new Human('Vasya', 25);

Human.getCount(new Human);

console.log(p1);

// ----------------------------

class C1 {
    constructor(x) {
        this.x = x;
    }

    c1(){}
}

class C2 extends C1 {
    // constructor(value){
    //     super(value);
    // }

    c2(){}
}

var cc = new C2(800);
console.log(cc)
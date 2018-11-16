console.log('Lection 8');

// + Обьекты основы
// + Свойства обьектов, методы обьектов
// + Вложенные обьекты
// + Перебор обьекта(for in), манипуляции свойствами, оператор delete



var data = {
    title: "Hello data!",
    x: 20,
    y: 0
}

// console.log(data);

// console.log(data.x);

// data.x = 400;

// console.log(data.x);

// var list = {
//     0: 67,
//     1: 34,
//     2: 98,
//     3: 5
// }

// console.log(
//     [7,8,5,5,233,236,263,623],
//     {x: 10, str: 'nwemrm', list: [1,8,5,7]},
//     list
// );

// Math.random();
// document.write();

// ------------------------------

var person = {
    name: 'Vasya',
    age: 29,
    list: ['Petya', 'Katya'],
    isMerried: true,
    // метод - функция, которая обьявлена внутри объекта
    run: function(){
        console.log('Vaysa run')
    },
    adress: {
        city: 'Kiev',
        getPostIndex: function(){
            return '04053';
        }
    }
}

console.log(person)

person.run();

var index = person.adress.getPostIndex();

console.log(index)


// ----------------------------------------
// перебор объекта

for(var key in person){
    // if(typeof person[key] == 'number')

    // console.log( key, person[key] );
    
    // console.log( person[key] );
}


// -----------------------------------

console.log(person.height);

person.x = 200;
delete person.adress;

console.log(person);


// -----------------------------------

/*

    Написать объект который будет внутри себя хранить функции, которые принимают 2 аргумента.
    Sum, Div, Mul
    Передать объект как параметр в функцию doFunction из домашнего задания.
    Все функции, которые описаны внутри объекта должны вызватся с переданными аргументами.

    var actions = {
        Sum: function(){},
        Div: function(){}
    }

    doFunction(2, 8, actions);


*/
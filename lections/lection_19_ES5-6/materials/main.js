console.log('Lection_1');


/*
- Scoping
- Arrow Functions
- Template Literals // tag templates

- Object Properties
- Destructuring

- Classes
- Generators
- Extended Parameter Handling // rest, spread (home)
- Promises
*/

// var x = 10;

// function f() {
    

//     console.log(x);
//     // var x;

//     return x;
// }

// f();


// let, const

// // console.log(x);
// let x = 50;
// // x = 60;

// if (true) {
//     let x = 20;
    

//     if (true) {
//         let x = 90;
//         console.log(x);
//     }
// }

// console.log(x);


// const x = new Number(10);
// let y = new Number(20);
// const str = 'hello';
// const flag = false;
// const obj = {
//     z: 20,
//     t: 30
// };
// x = 20;
// obj.z = 60;
// obj.p = 'hello';
// delete obj.t;
// obj = false;

// console.log(x, obj);


// ----------------------


// function f(){

// }

// f = function(item) {
//     return item * 2;
// }

// f = (item, pos) => {
//     // this нету!
//     // console.log(this)
//     let z = pos + 30;

//     return item * 2 * z;
// } ;

// let obj = {
//     z: 600,
//     sum: function(a, b) {
//         // console.log(this);

//         return a + b + this.z;
//     }
// }

// f();
// console.log( obj.sum(10, 2) );
// -------------------


// let arr = [21, 71, 8, 74, 8, 3, 4, 12];

// let res = arr.filter(function(item){
//     return item < 10;
// });

// res = arr
//         .filter(item => matchLogic(item))
//         .map(val => val*val*20)
//         .reduce((prev,curr) => prev + curr , 0)

// function matchLogic(value){
//     let x = Math.random()*value - value;

//     return value < 10 && x != 0;
// }

// console.log(res);

// -------------------
// var name = "Petya"
// var title = "Second title";
// // let str = "Hello, " + name + ' ! ';
// let str = `Hello, ${getRand(0, 50)}! <br /> ${getTitle(title, 2)} ${getTitle(title, 4)}`;

// window.onload = function(){
//     document.querySelector('.block').innerHTML = `${str} <hr /> ${getList([6, 7, 8, 9, 4])}`;
// }

// function getList(list){
//     return `<ul>${ list.map(item => `<li>${item}</li>`).join('') }</ul>`;
// }
// block.style.left = `${left}px`

// console.log(str);

// function getRand(min, max){
//     return Math.floor(Math.random()*(max - min) + min);
// }

// function getTitle(title, size){
//     return `<h${size}>${title}</h${size}>`;
// }

// ---------------

// function sum(a, b, data){
//     // if (a === undefined || b === undefined) {
//     //     return console.error('parametr not found')
//     // }
    // a = a || 0;
    // b = b || 0;

    // if(!data || !data.x) {
    //     data = {
    //         x: 0
    //     }
    // }
    
//     return a + b;
// }
// function sum(a = 0, b = 0, data = { x: 0 }){
//     return a + b;
// }

// let res = sum(2, 29);
// console.log(res);
// res = sum(6);
// console.log(res);


// --------------------------------------

let obj = {
    x: 10,
    f: function(){},
    'y-2': 200,
    f1(){

    },
    [1]: 'hello Worlds'
}

// console.log(obj);

// -------------------------------------


var {
    a, 
    z, 
    b,
    t = 0,
    adress: {
        street
    }
} = { 
    a: 10, 
    b: 30, 
    z: 70, 
    adress: { 
        street: 'Mechnikova', 
        city: 'Kiev' 
    }
}

// var a = obj.a;
// var b = obj.b;
// var z = obj.z;

// console.log(a, b, z, street, t);


var [a, b]= [1, 8, 9, 5]

console.log(a, b)

var list = [1, 4, 8, 3, 6, 9];

[list[0], list[3]] = [list[3], list[0]]

console.log(list);

function getUrl(config){
    let {protocol, host, port = ''} = config;

    let protocol = config.protocol;
    let host = config.host;
    let port = config.port || '';

    port = config.port ? ':' + port : port;

    return `${protocol}://${host}${port}`;
}

console.log( getUrl({protocol: 'https', host: 'ponchiki.com', port: '8787'}) );
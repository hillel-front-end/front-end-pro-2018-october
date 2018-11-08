console.log('Lection_6 additional');

/*
 дз 6 задание 5
 замыкания и hoisting
 обл видимости
*/



// f1();
// // f2(); // error

// function f1(){ // function declaration
//     console.log(1);
// }

// f2 = function(){ // function expression
//     console.log(2);
// }

// f1();
// f2();

// ----------------------------------


function f1(x, y, z){
    // console.log(x*y*z);
    if (x <= 0 || y <= 0 || z <= 0 ){
        return 0;
    }

    console.log('ALARM');
    return x*y*z;
    // return undefined;
}


// f1(2, [1, 7, 9, 23]);

a = 10;
b = 12;
c = 0;

res = f1(a, b, c);

// console.log(res);


// ----------------------------------


// global = 10; // define in !global! scope
// var local = 20; // define in current scope


// scope?

function sum(){
    // new scope

    global = 10;
    var local = 20; 
    console.log('in sum', local, global)
}

function outer(){
    var local = 'astae';

    console.log('in outer', local, global)
}

// sum();
// outer();




arr = [];
arr.length = 5;


for(var i = 0; i < arr.length; i++){
    // arr[i] = Math.floor(Math.random()*i);
    arr[i] = rand(i);
}

// console.log(arr);


function rand(position){
    var fact = 1;
    for(var i = 1; i <= position; i++){
        fact *= i;
    }

    return Math.floor(Math.random()*fact);
}



// ------------------------

function foo(arr){
    // var arr = [1, 6, 7, 8];
    var i = 0;
    console.log('foo');

    return inner;

    function inner(){
        // console.log('inner function');
        return arr[i++];
    }
}



var bar = foo([1, 6, 7, 8]); // foo -> factory

console.log( bar() ); // итератор
console.log( bar() );
console.log( bar() );
console.log( bar() );

// <==>
// var bar = function(){
//     console.log('inner function')
// }



// ------------------------


/*
    func = function (item){
        return item > 0;
    }
*/
function filter(list, func){ 
    var res = [];

    for(var i = 0; i < list.length; i++){
        if (func(list[i]) == true){
            res.push(list[i]);
        }
    }


    return res;
}

// функциональная парадигма в программировании (в js), функции высшего порядка

var resList = filter([1, 2, 3, -4, 8], function(item){
    return item > 0;
});

var resList = filter([1, 2, 3, -4, 8], isEven);


console.log(resList)

function isEven(x) { return x % 2 == 0; };

function fooBar(item){
    return item > 0;
}

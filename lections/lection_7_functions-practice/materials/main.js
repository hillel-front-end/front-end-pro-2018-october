console.log('Lection_7');

// console.log(foo);

// var foo = 300;
// f();


function f(){ // f1
    f1();
    console.log('f');


    console.log(foo);

    var foo = 300;
    f1 = undefined;

    
    function f1(){
        console.log('f1');

    }
}


// --------------------------


function factory(a){
    console.log('factory');

    return function(){
        console.log('inner', a);
    }
}

var foo = factory(70);
foo();

var bar = factory(50);
bar();
// console.log(arr);


// ------------------------------------


function sum(){
    var args = arguments;
    console.log(arguments); // псевдо массив

    var sum = 0;

    for(var i = 0; i < args.length; i++){
        sum += args[i];
    }

    return sum;
}

sum(2, 6, 7,8,8,4,3,6,36,36);
console.log('Lection_21 additional');


var promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

var promise2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(2);
    }, 2000);
});

var promise3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(3);
    }, 2500);
});


// Promise
//     .all([promise1, promise2, promise3])
//     .then(
//         function(params){ // all promises should be fullfield
//             console.log(params);
//         },
//         function(params){
//             console.log(params);
//         }
//         );


// ------------------------------------------


function* SomethingGenerator(items){
    for(let i = 0; i < items.length; i++){
        yield items[i];
    }


    // items.forEach(function* (){
    //     yield
    // });
}


var list = ["Hello", "world", "!"]

var data = SomethingGenerator(list); // data => generator

console.log(data);

console.log( data.next() );
console.log( data.return() );
console.log( data.next() );
console.log( data.next());
console.log( data.next() ); // {value: undefined, done: true}


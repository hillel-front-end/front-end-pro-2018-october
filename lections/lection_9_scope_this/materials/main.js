console.log('Lection_9');
function f(a, b){
    var x = 10;

    console.log(a, b, x, z)
    f2();

    function f2(){
        var innerF2 = 'World!'
        console.log(b, z);
        // a, b в замыкании
        // z из global scope
        f3();

        function f3(){
            var innerF3 = 'hello!'
            console.log(innerF3, x, a, innerF2);
        }
    }
}

var z = 40;


// f('p1', 20);
// res = 0;
// for(var i = 0; i < 20; i += 2){
//     res += i*i;
// }

// console.log(res)


// -----------------------------------


var list = {
    x: 10,
    f: function(){},
    y: 200
}

// var fofoData = list;
var fofoData = Object.assign({}, list);

var arr = [1, 2, 3];
var items = arr.slice(0)

arr.push(50)
console.log(arr, items)
list.x = 0;


// Object.assign(list, { z: 200, y: 5 }, { f: 'sas' })
console.log(list);
console.log(fofoData);





var x = 200;
console.log(x);

//  ----------------------------------

console.log('hello world')
console.log('fooo')

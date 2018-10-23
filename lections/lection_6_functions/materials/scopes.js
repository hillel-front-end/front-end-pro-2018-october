function f1(x){
    var z = 20;

    var some_x = x - 50;

    f2(some_x);

    function f2(x){
        console.log('f2', x, z, global_p);
        console.log(window.x);
    }

    console.log('f1', x, z, global_p, foo);
}


var foo = 80;
global_p = 50;

x = 800;

f1(10);


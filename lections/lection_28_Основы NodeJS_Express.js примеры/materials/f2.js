var a = 60;

var res = a + 30;

var data = {
    x: 10,
    z: res + a,
    sum: ()=> {}
}

for(i = 0; i <= 10; i++){
    if (i == 8) {
       console.log('hello') 
    }
    res += i;
}
console.log(data);
console.log(data.x + a)

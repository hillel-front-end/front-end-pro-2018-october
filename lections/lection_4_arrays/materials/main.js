console.log('Lection_4');

// A = [];

// B = [1, 7, 8, 23, 8, 5];

// console.log(B, B.length);

// for(i = 0; i < B.length; i++){
//     console.log( B[i] );

//     if (B[i] % 2 == 0){
//         B[i] = B[i]*B[i];
//     }
// }

// Math.floor(Math.random()*66 - 20)

// console.log(B);

// ---------------------------------

// arrays in js


// arr = [7, 6,8 ,4,89 ,5 ,4,7 ,75 ,76];

// console.log(arr)
// arr.length = 100;
// console.log(arr)
// arr.length = 5;
// console.log(arr)
// arr.length = 10;
// console.log(arr)

// for(i = 0; i < arr.length; i++){
//     console.log( arr[i] );
// }


// arr[20] = 'INNER';

// console.log(arr)

// ------------------------------

// A = new Array(30);
// A = new Array(30, 10);
// console.log(A)

// ----------------------------

// n = +prompt();
n = 5;
m = 6;
A = new Array(n);
B = new Array(m);

for(i = 0 ; i < A.length; i++) {
    A[i] = Math.floor(Math.random()*66 - 20);
}

for(i = 0 ; i < B.length; i++) {
    B[i] = Math.floor(Math.random()*66 - 20);
}

console.log(A)
console.log(B)

for(i = 0 ; i < A.length; i++) {
     item = A[i];

     for(j = 0; j < B.length; j++){
        if(B[j] == item){
            document.write(B[j] + "<br />");
        }
     }
}
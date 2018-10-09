console.log("Lection_2");

/*
+ bool
+ logical and or
+ if else
+ тернарный оператор ? // at home
+ циклы основы
+ while () {}
+ do {} while()
+ for(){}

*/


// variable = -200;
// x = +prompt();

// if (variable > 0 || (x < 20 && x >= 5)) {
//     console.log('variable > 0');
// }

// console.log('some');

// ------------------------------

// variable = -200;

// if (!(variable > 0)) {
//     console.log('true');  
// } else {
//     console.log('false');
// }

// console.log('some');

// ------------------------------

// x = -12;

// if (x > 0) {
//     console.log('x > 0');
// } else if(x >= -3 && x <= 0){
//     console.log('-3 > x > 0');
// } else {
//     console.log('x < -3');
// }

// ------------------------------

// a = +prompt();

// if (!isNaN(a)) {
//     if (a % 2 == 0) {
//         console.log('a is even');
//     }
// } else {
//     console.log('error');
// }

// console.log(typeof NaN);

// ------------------------------


// i = -1; // !

// while(i < 10){ // !
//     i++; // !

//     console.log(i); 
// }
// console.log('after', i);


// -------------------------------

// i = 0; 

// do {
//     console.log(i); 
//     i++;
// } while(i < 10);


// console.log('after', i);


// -------------------------------


// for(i = 0; i < 10; i++){
//     console.log(i);
// }

// -------------------------------

for(i = 0, j = 5; (i < 10 && j > 0); i++, j+=40){
    console.log(i, j);
}
console.log('Lection_6');

// function outArray() {
//     console.log('out array')
//     document.write(arr.join(' | '));
// }


// outArray();

// arr = [1, 6, 7]
// outArray();

// ------------------------

// getSum = 200;
// function getSum(a, b) {
//     console.log(a + b);
// }


// getSum(2, 4);

// console.log( getSum );
// console.log( getSum() );


// ------------------------

// f1();

// // function declaration
// function f1(a, b) {
//     console.log('f1', a, b)
// }

// f1();


// // f2();

// // function expression
// f2 = function(a, b) {
//     console.log('f2', a, b)
// }

// f2(9);


// ------------------------

//  list = [1, 9,8, 4,34,5,45,45,4,5]
// function outputArrayAndSum(list, sep){
//     resSum = 0;

//     if (!sep){
//         sep = ' | '
//     }

//     for(i = 0; i < list.length; i++){
//         resSum += list[i]
//         document.write(list[i] + sep);
//     }

//     return resSum;
// }


// array = [1, 9,8, 4,34,5,45,45,4,5];

// // outputArrayAndSum([2,7,8,54]);
// sum = outputArrayAndSum(array, ' _ ');
// console.log(array, sum);

// console.log(outputArrayAndSum(array, ' ! '));

// ----------------------------------------------


function getRand(min, max) {
    return Math.floor(Math.random()*(max - min) + min);
}


// console.log( getRand(0, 23) + getRand(-5, 89) + getRand(0, 2) );

// list = [1, 7, 8, 3, 9, 4, 5].join('_');
// list = [1, 2, 3].concat([7, 5, 2, 3])

// item = [2, 7, 9, 8].pop();
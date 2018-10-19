console.log('Lection_5');

// arr = [1, 2, 3, 8, 9, 4, 8];

// str = arr.join(' | ');

// document.write(str);

// document.write('<ul>');
// for(i = 0; i < arr.length; i++){
//     document.write('<li>' + arr[i] + '</li>');
// }
// document.write('</ul>');
// -------------------------------------

// document.write('<ul><li>');
// document.write(arr.join('</li><li>'));
// document.write('</li></ul>');

// -------------------------------------

// middle = Math.ceil(arr.length / 2) - 1;

// if (arr.length % 2 == 0) {
//     arr.splice(middle, 2);
// } else {
//     arr.splice(middle, 1); 
// }


// -------------------------------------

// create array
// n = 10;
// m = 20;
// A = new Array(n)

// for(i = 0; i < A.length; i++){
//     A[i] = new Array(m);
// }

// console.log(A)

// fill array

// for(i = 0; i < A.length; i++){
//     for(j = 0; j < A[i].length; j++){
//         A[i][j] = Math.floor(Math.random()*10);
//     }
// }

// output array


// for(i = 0; i < A.length; i++){
//     for(j = 0; j < A[i].length; j++){
//         document.write(A[i][j] + ' ');
//     }
//     document.write('<br />');
// }


// -------------------------------------

n = 3;
m = 3;
A = new Array(n)

for(i = 0; i < A.length; i++){
    A[i] = new Array(m);

    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*5 + 1);
        document.write(A[i][j] + ' ');
    }
    document.write('<br />');
}

// min = A[0][0];
// imin = 0;
// jmin = 0;
// for(i = 0; i < A.length; i++){
//     for(j = 0; j < A[i].length; j++){
//         if (A[i][j] < min) {
//             min = A[i][j];
//             imin = i;
//             jmin = j;
//         }
//     }
// }

// console.log(min);

// buffer = A[imin][jmin];
// A[imin][jmin] = A[0][0];
// A[0][0] = buffer;

// document.write('<hr />');
// for(i = 0; i < A.length; i++){
//     for(j = 0; j < A[i].length; j++){
//         document.write(A[i][j] + ' ');
//     }
//     document.write('<br />');
// }


sum = 0;
for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        sum += A[i][j];
    }
}

av = sum / (n*m);

console.log('av', av);
console.log(A)

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
       item = (A[i][j] - av)*100/A[i][j];
       console.log(item+'%');
    }
}

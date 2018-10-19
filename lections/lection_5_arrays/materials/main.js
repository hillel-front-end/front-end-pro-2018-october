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
n = 10;
m = 20;
A = new Array(n)

for(i = 0; i < A.length; i++){
    A[i] = new Array(m);
}

// console.log(A)

// fill array

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*10);
    }
}

// output array


for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        document.write(A[i][j] + ' ');
    }
    document.write('<br />');
}
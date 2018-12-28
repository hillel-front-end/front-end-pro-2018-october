console.log('Lection_19');



var list = [
    1,
    3,
    7,
    8,
    -9,
    -5,
    10,
    // '89',
    // {}
];

var returnedValue = list.forEach(function(item, pos, source){
    // console.log(item, pos, source);
    // source[5] = 500; // very bad
});
// console.log(returnedValue);

returnedValue = list.filter(function(item, pos, source){
    return item*item > 50;
});

// console.log(returnedValue);

returnedValue = list.every(function(item, pos, source){
    return typeof item == 'number';
});

// console.log(returnedValue);

returnedValue = list.some(function(item, pos, source){
    return typeof item == 'object';
});

// console.log(returnedValue);

// ---------------------------------------------------

returnedValue = list.map(function(item, pos, source){
    if (item < 0){
        return item*item;
    }


    return '';
});

console.log(returnedValue);

// ---------------------------------------------------


var data = [
    {
        price: 100
    },
    {
        price: 200
    },
    {
        title: '123'
    },
    {
        price: 300
    }
]

// var sum = data.reduce(function(prev, item){
//     if(!item.price) return prev;
//     return prev + item.price;
// }, 0);

var filtredData = data
    .filter(function(item){
        return item.price;
    });

var sum = filtredData.reduce(function(prev, item){
    return prev + item.price;
}, 0);

console.log(sum, sum/data.length);


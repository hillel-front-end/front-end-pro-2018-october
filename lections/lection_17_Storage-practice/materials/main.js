console.log('Lection_17');

// JSON
// WebStorage

// local Storage

console.log(localStorage);



if (localStorage.x) {
    document.write(localStorage.x);
} else {
    localStorage.x = prompt();
}

localStorage.DDID = 'fooName'
localStorage.setItem('DDID', 'fooName');
// delete localStorage.x; 
// localStorage.removeItem('x');;

// sessionStorage


var data = `
    {
        "name": "Vasya",
        "age": 23,
        "adress": {
            "city": "Kiev",
            "list": [
                1, 2, 3
            ]
        }
    }
`;

var list = `
    [1, 10, false, [2, 8]]
`;

var parseData = JSON.parse(data);
console.log(data, parseData);


var object = {
    name: 'Vasya',
    age: 23,
    country: 'Ukr',
    list: [1, 8, 9]
}

var jsonData = JSON.stringify(object);
console.log(jsonData)

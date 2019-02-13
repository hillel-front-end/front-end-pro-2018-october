console.log('lection_29_additional');

// descriptors

let data = {
    x: 10,
    y: 20,
    get sum(){
        return this.x + this.y;
    },
    set sum(value){
        console.log(value);
    },
    set value(param){
        console.log(param);
        this.newValue = param;
    }
}



// Object.defineProperty(data, 'property', {
//     value: 78, // undefined default
//     writable: false, // false default
//     enumerable: false, // false default,
//     configurable: true
// })

// console.log(data);
// Object.defineProperty(data, 'property', {
//     value: 25, // undefined default
//     writable: false, // false default
// })

console.log(data.sum); // data.sum -> getter
data.sum = 700; // data.sum -> setter


data.value = 590;
console.log(data);
// for(let key in data) {
//     console.log(key);
// }

Object.defineProperty(data, 'someValue', {
    get(){
        return this.x + 2050;
    },
    set(param){
        console.log('param = ' + param);
    }
})

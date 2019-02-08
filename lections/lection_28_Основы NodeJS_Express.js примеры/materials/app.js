console.log('app start')
const post = require('./post');
const enL10N = require('./en');
var jsonFormat = require('./jsonFormat');


// const fs = require('fs');

// console.log('POST import: ', post);

post.Foo();

console.log(enL10N);

const post1 = new post.Post(enL10N.title2);

post1.showTitle();

console.log('app end');
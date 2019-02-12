console.log('lection_29');


var pattern = /some/i;

// search
str = `so23me9860 пSOMEивет  шаблон прШабsomeлоноек8 8тированияшабЛон`;
// console.log(str.search(pattern));

// match
// var result = str.match(/шаблон/i);
// console.log(result);

// //match /g
// result = str.match(/шаблон/gi);
// console.log(result);

// split
// console.log( '5343--12-34-56_89:98:23'.split(/--|[-:_]/) );

// // split examples
// console.log('132sdkf123123alfknadskljfn123'.split(/-/));

//replace
// console.log('12- 34- 56'.replace( /- /g, ":" ));
// -----------------

/*
 - классы и спецсимволы
 - диапазоны и наборы
 - квантификаторы +, *, ? и {n}
 - Альтернация
*/

var str = "Hello wor! world w-d! 56.38456 ggsdg wolrd 5678.23 123213. How helloiamlongphrase are you! How привет мир! 1988 год Как дела? Что делать?  Когда нет ничего в 18 лет.too"
// var result = str.match(/\b\w{3}\b/gi);
// var result = str.match(/\d{1,}\.{0,1}\d{0,}/gi);
// var result = str.match(/\d+(\.\d+)?/gi);
// var result = str.match(/[-3-6A-Za-zА-Яа-я]{3}/gi);
// var result = str.match(/wo(rl|lr)d/gi);
// var result = str.match(/год|wor|лет|how/gi);
// console.log(result)


// -----------------
// . ? [ ] { } & ^ \ / |
// \. \? \/ \& \|
// var str = `How are \\ \\ //\\\\ | yo hello.foo u \n \t \s \f [123] [123}`;
// // var result = str.match(/\[\d{3}\]/gi);
// // var result = str.match(/\/\/\\\\/g);
// var result = str.match(/hello\.foo/g);
// console.log(result)

// ----------------------------

// var str = "Hello Pet+a! Petтa Hello Petia! Hello Petra!";
// var result = str.match(/Pet[\w+-а-яїЇА-Я]a/gi);
// var result = str.match(/Pet[^i]a/gi);
// console.log(result);

// ----------------------------

// var str = "Hello Ivan! Hello Ivan Hello Ivan?";
// var result = str.match(/Hello Ivan[!.]?/gi);
// console.log(result);

// ----------------------------

// var str = "s12344236523 helo5 s s123 !hello s12.5 rhello 2018 2 rrhello 23 rrrhelllllllloooo";
// // var result = str.match(/s\d*/gi);
// var result = str.match(/hell?o/gi);
// console.log(result);

// ----------------------------

// var str = "homahomahoma123 homa123";
// var result = str.match(/[0-9.]+/gi);
// var result = str.match(/(homa){2}[\w\d]+\b/gi);
// var result = str.replace(/(homahoma)(.+)\b/g,"$2");
// console.log(result);

// ----------------------------


var str = `
<br />
<input />
<img src="hello" />
e
eqw
<table><img /><div>asdasdasd</div><div>asdasd</div><div></div></table>
<div></div>
<div>3346</div>
qwe
qwe
qwe
`;

// console.log( str.match(/<[\w\s="']+\/?>/gi) );
console.log( str.match(/<[-\w\s="']+>((<[- \w]+>.*?<\/[\w ]+>)|(\w+)|(<[\w\s="']+\/?>))*?<\/[\w ]+>/gi) );
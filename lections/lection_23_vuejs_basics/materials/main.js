// var app = new Vue({
//   el: '#app',
//   data: {
//     x: 'world',
//     message: 10.5,
//     list: [1, 7, 83],
//     str: "Hello world",
//     info: {
//       name: 'Vasya',
//       age: 27
//     }
//   }
// })

// console.log(app);

// setTimeout(() => {
//   console.log(app.message);
//   app.message += 200;
// }, 3000)

// // ---------------------------------------

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     className: 'active',
//     appearence: 'transition: .5s; color: red;',
//     value: 0,
//     message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
//   }
// })

// setInterval(() => {
//  app2.value = Math.floor(Math.random() * 60)
// }, 1000)

// // // ---------------------------------------

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

// setTimeout(() => {
//   app3.seen = false;
// }, 2000)


// // // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     arr: [
//       1, 8, 9, 6
//     ],
//     list: [
//       {
//         text: 'Изучить JavaScript'
//       },
//       {
//         title: 'jasnf'
//       },
//       {
//         text: ''
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       }
//     ]
//   }
// })




// // // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!',
//     counter: 3,
//     list: [6, 9, 12]
//   },
//   methods: {
//     calculate: function(a=0){
//       return 10 + 20 + a + this.counter;
//     },
//     Click(event, value, pos){
//       this.list.splice(pos, 1)
//       console.log('clicked', arguments);
//     },
//     mouseover(ev){
//       this.counter = ev.offsetX;
//     },
//     getValue(){
//       return this.calculate();
//     }
//   }
// })

// // // ---------------------------------------

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!',
    result: 'RESULT',
    x: 10,
    switcher: false,
    date: ''
  }
})


// -----------------------------

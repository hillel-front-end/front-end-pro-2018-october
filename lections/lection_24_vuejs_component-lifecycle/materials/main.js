var obj = {
  x: 22
}

var appData = {
  list: [1, 2, 3, 4],
  str: '123',
  ctx: {},
  message: ''
}

var app = new Vue({
  el: '#app',
  data: {
    x: 10,
    y: 0,
    prices: null
  },
  methods: {
    onClick(){}
  },

  // create hooks
  beforeCreate(){
    console.log('beforeCreated');
    // debugger;
  },
  created(){
    console.log('created');
    this.onClick();
    // debugger;
  },

  // mount
  beforeMount(){
    console.log('beforeMount');
    // debugger;
  },

  mounted(){
    console.log('mounted');
    // debugger;
  },

  // update

  beforeUpdate(){
    console.log('beforeUpdate');
    // debugger;
  },
  
  updated(){
    console.log('updated');
    // debugger;
  }
})

// app.message = 'новое сообщение' // изменяем данные
// console.log(app.$el.textContent);
// Vue.nextTick(function () {
//   console.log(app.$el.textContent);
// })


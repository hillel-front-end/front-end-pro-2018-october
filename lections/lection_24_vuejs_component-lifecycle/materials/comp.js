Vue.component('tool-box', {
    // props: ['count'],
    props: {
        count: Number,
        list: Array,
        info: Object,
        flag: {type: Boolean, default: true}
    },
    data() {
        return {
            name: 'Vasya'
        }
    },
    methods: {
        onClick(){
            console.log(this.flag, this._props.flag);
        }
    },
    template: `
        <div>
            <h2 v-if="flag">Header</h2>    
            Hello i am {{ name }} | age - {{ count }}.
            <button @click="onClick">Click</button>
        </div>
    `
});





var asset = {
    x: 10,
    isComponentNeeded: false,
    age: 30,
    info: {
        x: 10,
        z: 30,
        f: [2, 8]
    }
};

console.log(asset);
// debugger;


var app = new Vue({
    el: '.container',
    data: asset
});

console.log(asset);
// debugger;

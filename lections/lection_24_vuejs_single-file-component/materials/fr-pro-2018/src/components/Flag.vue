<template>
    <div class="flag" @click="onClick">
        <!-- Flag!
        <hr>
        newValue: {{ getX() }} | {{ getXSuper }} 
        <hr>

        <ul>
            <li v-for="item in fullList">{{item}}</li>
        </ul> -->

        Inner
        <input type="text" v-bind:value="value" @input="Change">
    </div>
</template>

<script>
export default {
    name: "Flag",
    props: ['value'],
    data(){
        return {
            x: 20,
            y: 50,
            list1: [1, 2, 3],
            list2: [4, 5, 6]
        }
    },
    methods: {
        onClick(){
            console.log('click');

           
        },
        getX() {
            return this.x * this.y;
        },
        Change(event){
             this.$emit('transfer', event.target.value);
        }
        
    },
    computed: {
        getXSuper(){
            return this.x * this.y;
        },
        fullList(){
            return this.list1.concat(this.list2);
        }
    }
}
</script>

<style>

</style>


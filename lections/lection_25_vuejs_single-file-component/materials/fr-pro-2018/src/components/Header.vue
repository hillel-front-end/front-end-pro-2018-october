<template>
    <div>
        {{ value }}
        <div 
            :class="['block', isActive(block)]" 
            v-for="block in blocks" 
            :key="block"
            :style="{ backgroundColor: block }">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data(){
        return {
            blocks: ['red', 'blue', 'green']
        }
    },
    methods: {
        isActive(currColor){
            return this.value === currColor ? 'active' : '';
        }
    }
}
</script>

<style>
.block {
    width: 100px;
    height: 100px;
    border: 2px solid black;
}

.block.active {
    box-shadow: 10px 3px 2px black;
}
</style>

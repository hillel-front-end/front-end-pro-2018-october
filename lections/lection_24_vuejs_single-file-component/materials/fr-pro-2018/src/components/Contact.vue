<template>
    <div>
        {{ blockName }}
        <input type="text" @input="onChange">
    </div>
</template>

<script>
export default {
    data(){
        return {
            blockName: ''
        }
    },
    methods: {
        onChange(event){
            this.blockName = event.target.value;
            this.$emit('chng', event.target.value);
        }
    }
}
</script>

<style>

</style>

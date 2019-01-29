<template>
    <div class="flag" @click="onClick">Flag!</div>
</template>

<script>
export default {
    name: "Flag",
    methods: {
        onClick(){
            console.log('click');
        }
    }
}
</script>

<style>

</style>


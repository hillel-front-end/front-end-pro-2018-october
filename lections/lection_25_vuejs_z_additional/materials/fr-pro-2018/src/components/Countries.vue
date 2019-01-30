<template>
    <div>
        <select v-model="selectedCountry">
            <option v-for="country in countries" :value="country">
                {{ country }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: ['model'],
    data(){
        return {
            selectedCountry: this.model.selectedCountry,
            countries: [
                'ua', 'de', 'ce'
            ]
        }
    },
    watch: {
        selectedCountry(newVal, oldVal){
            this.$emit('change-country', newVal);
        }
    }
}



</script>

<style>

</style>

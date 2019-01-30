<template>
    <div>
        <select v-model="selectedCity">
            <option v-for="city in cities[this.model.selectedCountry]" :value="city">
                {{ city }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: ['model'],
    data(){
        return {
            selectedCity: this.model.selectedCity,
            cities: {
                ua: ['Kiev', 'Kharkiv', 'Lviv'],
                de: ['Berlin', 'Koln', 'Dortmund'],
                ce: ['Praga']
            }
        }
    }
}
</script>

<style>

</style>

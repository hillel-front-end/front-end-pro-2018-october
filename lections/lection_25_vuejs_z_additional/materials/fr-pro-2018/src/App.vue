<template>
  <div id="app">

    <!-- <Flag :some-value="list">
      Inner text! 
    </Flag>

    <Flag :some-value="list">
      <ul>
        <li v-for="id in list">
          {{ id }}
        </li>
      </ul>
    </Flag> -->
    <Countries :model="transfer" @change-country="onChangeCountry"></Countries>
    <Cities :model="transfer"></Cities>

  </div>
</template>

<script>
import Flag from './components/Flag'
import Countries from './components/Countries'
import Cities from './components/Cities'

export default {
  name: 'app',
  components: {
    Flag,
    Countries,
    Cities,
  },
  data(){
    return {
      list: [1, 8, 9],
      transfer: {
        selectedCity: '',
        selectedCountry: 'de'
      }
    }
  },
  methods: {
    onChangeCountry(country){
      this.transfer.selectedCountry = country;
    }
  }
}
</script>

<style>
div {

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

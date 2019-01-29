<template>
  <div id="app">
    
    <img alt="Vue logo" src="./assets/logo.png">
    {{ text }}

    <ul>
      <li v-for="(value, index) in list" :key="index">
        {{ value }}
      </li>
    </ul>

    <Flag></Flag>
  </div>
</template>

<script>
import Flag from './components/Flag';

export default {
  name: 'app',
  components: {
    Flag
  },
  data(){
    return {
      text: 'Hello world!',
      list: [
        2, 2, 5, 9, 7
      ]
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

<template>
  <div id="app">
    <Header :value="passValue"></Header>
    <Contact @chng="onChange"></Contact>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    {{ text }}

    <ul>
      <li v-for="(value, index) in list" :key="index">
        {{ value }}
      </li>
    </ul> -->

    <!-- Outer
    <input type="text" v-model="text">
    <Flag :value="text" @transfer="onTransfer"></Flag>
    RESULT value: {{ text }} -->
  </div>
</template>

<script>
import Flag from './components/Flag';
import Header from './components/Header';
import Contact from './components/Contact';

export default {
  name: 'app',
  components: {
    Flag,
    Header,
    Contact
  },
  data(){
    return {
      text: 'Hello world!',
      list: [
        2, 2, 5, 9, 7
      ],
      passValue: ''
    }
  },
  methods: {
    onChange(value){
      this.passValue = value;
    },
    onTransfer(value){
      this.text = value;
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

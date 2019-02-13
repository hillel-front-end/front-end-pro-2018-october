<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TreeItems :tree="tree"></TreeItems>
  </div>
</template>

<script>
import TreeItems from './components/TreeItems';
export default {
  name: 'app',
  components: {
    TreeItems
  },
  data() {
    return {
      tree: [
        {
          title: 'title 1',
          children: [
            {
              title: 'title 14'
            },
            {
              title: 'title 15',
              children: [
                {
                  title: 'title 2'
                },
                {
                  title: 'title 2'
                },
                {
                  title: 'title 2'
                }
              ] 
            }
          ]
        },
        {
          title: 'title 2'
        },
        {
          title: 'title 13',
          children: [
            {
              title: 'title 14'
            },
            {
              title: 'title 15',
              children: [
                {
                  title: 'title 2'
                },
                {
                  title: 'title 2'
                },
                {
                  title: 'title 2',
                  children: [
            {
              title: 'title 14'
            },
            {
              title: 'title 15',
              children: [
                {
                  title: 'title 2'
                },
                {
                  title: 'title 2'
                },
                {
                  title: 'title 2'
                }
              ] 
            }
          ]
                }
              ] 
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

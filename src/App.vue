<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>App</h2>
    {{hello}}
  </div>
</template>

<script>
import gql from 'graphql-tag'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      hello:'',
    }
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`{hello}`,
  },
  components: {
    HelloWorld
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

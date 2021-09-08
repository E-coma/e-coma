<template>
  <div style="display: flex;">
    <span v-for="(item, index) of item" :key="index" style="padding: 10px;">
      {{ item }}
    </span>
  </div>
  <img alt="Vue logo" src="./assets/top.png">
  <HelloWorld msg="E.COMA"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      item: ['a', 'b', 'c']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

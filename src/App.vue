<template>
<div>
<router-view></router-view>
</div>
</template>
<script>
export default {
  name: 'App',
  components: {
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
  font-family: 'Microsoft Yi Baiti', arial, sans-serif;
  color: #707070;
 /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

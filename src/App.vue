<template>
<Header1></Header1>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import Header1 from './components/Header1'
export default {
  name: 'App',
  components: {
    Header1
  },
  data: function () {
    return {
      item: ['a', 'b', 'c']
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: "Microsoft Yi Baiti", arial, sans-serif;
  color: #707070;
  transition: all 0.5s 0s ease;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
html {
overflow-y: scroll;
}
button {
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #707070;
  padding: 2px 37px;
  letter-spacing: 1.5px;
}

button:hover {
  background-color: #dddddd;
}
@media screen and (max-width:600px) {
body {
  min-width: auto;
  width: 100%;
  margin: 0 auto;
}
header{
  width: fit-content;
  margin: 0 auto;
}
}

</style>

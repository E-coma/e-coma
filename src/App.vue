<template>
  <div>
  <div class="imgAndHeader">
    <div>
    <a class="link hover-aoi">
      e-coma
    </a>
    </div>
    <div>
    <a class="link hover-aoi" href="https://www.google.com/">
      ECOMA.PORT
    </a>
    </div>
    <div>
    <a class="link hover-aoi" href="https://salon.io/e-coma">
      port
    </a>
    </div>
  </div>
  <img alt="Vue logo" src="./assets/top.png">
  <HelloWorld msg="E.COMA" style="text-align: center;"/>
  </div>
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
 /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.imgAndHeader {
  display: block;
  width: 300px;
  height: 200px;
  background-image: url("./assets/top.png");
  background-size: cover;
}
.link {
  text-align: left;
  padding: 5px;
  color: #666;
      text-decoration: none;
  cursor: pointer;
}
.hover-aoi:hover {
    color: rgb(118, 122, 165);
}
</style>

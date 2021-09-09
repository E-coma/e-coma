<template>
  <div class="ue">
  <h1> E-COMA </h1>
  </div>
<div class="dekai">
<div class="aida">
  <span class="link hover-aoi">
      e-coma
    </span>
</div>
<div class="aida">
    <a class="link hover-aoi" href="https://www.google.com/">
      profile
    </a>
</div>
<div class="aida">
    <a class="link hover-aoi" href="https://salon.io/e-coma">
      photo
    </a>
</div>
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
 /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.link {
  text-align: left;
  padding: 10px;
  color: rgb(255, 255, 255);
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    width: 10px;
    height: 10px;
    margin-bottom: 50%;
}
.hover-aoi:hover {
    color: rgb(118, 122, 165);
}
.dekai {
  width: 800px;
  height: 500px;
  margin: 0 auto;
  background-image: url(assets/happa.png);
  background-size: cover;
  display: block;
}
.aida{
  height: 5px;
  margin-bottom: 25px;
}
.ue{
  text-align: center;
}
</style>

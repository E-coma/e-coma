<template>
  <div class="ue font1">
  <p class="titlehaba"> E-COMA </p>
  </div>
<div class="dekai">
<div class="aida e-comaaida">
  <span class="link hover-aoi" @click="toprofile">
      profile
    </span>
</div>
<div class="aida">
    <a class="link hover-aoi" href="https://www.google.com/">
      gallery
    </a>
</div>
<div class="aida">
    <a class="link hover-aoi" href="https://salon.io/e-coma">
      contact
    </a>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data: function () {
    return {
      item: ['a', 'b', 'c']
    }
  },
  methods: {
    toprofile: function () {
      this.$router.push({ path: '/profile' })
    }
  }
}
</script>

<style scoped>
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
  padding-left: 15px;
  padding-top: 10px;
  color: rgb(255, 255, 255);
    text-decoration: none;
    cursor: pointer;
    font-size: 19px;
    width: 10px;
    height: 10px;
    margin-bottom: 50%;
    font-family: system-ui;
}
.hover-aoi:hover {
    color: rgb(118, 122, 165);
}
.dekai {
  width: 800px;
  height: 500px;
  margin: 0 auto;
  background-image: url(../assets/aoi.png);
  background-size: cover;
  display: block;
}
.aida{
  height: 5px;
  margin-bottom: 25px;
}
.ue{
  text-align: center;
  color: rgba(107, 106, 107, 0.733);

}
.font1{
  font-family: system-ui;
  font-size: 50px;
}
.titlehaba{
  margin-top: 10px;
  margin-bottom: 10px;
}
.e-comaaida{
padding-top: 20px;
}
</style>

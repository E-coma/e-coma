<template>
<header>
  <div class="ue font1">
    <p class="titlehaba"> E-COMA </p>
  </div>
  <div class="subtitle">
    <p>EMIRI HIIZUMI</p>
    <p>PORTFOLIO.SITE</p>
  </div>
  <div class="nav">
    <div class="aida">
      <a class="link hover-aoi" @click="toprofile">
          about me
        </a>
    </div>
    <div class="aida">
        <a class="link hover-aoi" @click="towebdesign">
          webdesign
        </a>
    </div>
        <div class="aida">
        <a class="link hover-aoi" @click="togallery">
          photos
        </a>
    </div>
    <div class="aida">
        <a class="link hover-aoi" @click="tocontact">
          contact
        </a>
    </div>
  </div>
  </header>
  <article>
    <div class="top-img">
    <img src="../assets/aoi.png" width="990" alt="">
    </div>
  </article>
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
    },
    towebdesign: function () {
      this.$router.push({ path: '/webdesign' })
    },
    togallery: function () {
      this.$router.push({ path: '/gallery' })
    },
    tocontact: function () {
      this.$router.push({ path: '/contact' })
    }
  }
}
</script>

<style scoped>
.subtitle {
  line-height: 0px;
  display: block;
  margin: 0 auto;
  margin-bottom: 57px;
  text-align: center;
  font-size: 22px;
}
.link {
  text-align: left;
  padding: 5px;
  margin: 10px 80px;
  color: #707070;
    text-decoration: none;
    cursor: pointer;
    font-size: 22px;
    width: 10px;
    height: 10px;
}
.hover-aoi:hover {
    color: rgb(118, 122, 165);
}
.nav {
  display: flex;
  justify-content: center;
}
.aida{
  height: 5px;
  margin-bottom: 25px;
}
.ue{
  text-align: center;

}
.font1{
  font-size: 50px;
}
.titlehaba{
  margin-top: 35px;
  margin-bottom: -10px;
}

.top-img {
  display: block;
  text-align: center;
  margin-top: 5px;
}

</style>

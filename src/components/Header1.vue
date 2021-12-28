<template>
  <header>
    <div  v-bind:class="{ 'top-title': $route.path !== '/','hover-aoi': $route.path !== '/'}" @click="tohome">
    <div class="ue font1">
      <p class="titlehaba">E-COMA</p>
    </div>
    <div class="subtitle">
      <p>EMIRI HIIZUMI</p>
      <p>PORTFOLIO.SITE</p>
    </div>
    </div>
    <div class="nav">
      <div class="aida">
        <a class="link hover-aoi" v-bind:class="{'dont-select': $route.path !== '/' && $route.path !== '/profile'}" @click="toprofile"> about me </a>
      </div>
      <div class="aida">
        <a class="link hover-aoi" v-bind:class="{'dont-select': $route.path !== '/' && $route.path !== '/webdesign'}" @click="towebdesign"> webdesign </a>
      </div>
      <div class="aida">
        <a class="link hover-aoi" v-bind:class="{'dont-select': $route.path !== '/' && $route.path !== '/photos'}" @click="tophotos"> photos </a>
      </div>
      <div class="aida">
        <a class="link hover-aoi" v-bind:class="{'dont-select': $route.path !== '/' && $route.path !== '/contact'}" @click="tocontact"> contact </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header1',
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
    tophotos: function () {
      this.$router.push({ path: '/photos' })
    },
    tocontact: function () {
      this.$router.push({ path: '/contact' })
    },
    tohome: function () {
      this.$router.push({ path: '/' })
    }
  }
}
// export default {
//   name: 'Header1',
//   props: {
//     subTitle: String
//   },
//   data: function () {
//     return {
//       bosuti: 'E-COMA'
//     }
//   },
//   computed: {
//     bosuti2: function () {
//       const mozi1 = 'E-COMA'
//       const mozi2 = '.'
//       let mozi3 = mozi1
//       mozi3 = mozi1 + mozi2
//       return mozi3
//     }
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-title {
  cursor: pointer;
}
.subtitle {
  line-height: 0px;
  display: block;
  margin: 0 auto;
  margin-bottom: 57px;
  text-align: center;
  font-size: 22px;
  letter-spacing: 1px;
}
.link {
  text-align: left;
  padding: 5px;
  margin: 10px 80px;
  color: #707070;
  text-decoration: none;
  cursor: pointer;
  font-size: 22px;
  letter-spacing: 1px;
  width: 10px;
  height: 10px;
}
.hover-aoi {
  transform: none;
}
.hover-aoi:hover {
  color: #000;
  transition: color 0.5s ease 0s;
}
.nav {
  display: flex;
  justify-content: center;
}
.dont-select {
  opacity: 0.3;
}
.aida {
  height: 5px;
  margin-bottom: 25px;
}
.ue {
  text-align: center;
}
.font1 {
  font-size: 50px;
}
.titlehaba {
  margin-top: 35px;
  margin-bottom: -10px;
  letter-spacing: 2px;
}
</style>

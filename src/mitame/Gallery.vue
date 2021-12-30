<template>
<article>
<div class="header">
</div>
<div v-bind:class="{'no-select': !select,'zoom': select,}">
<img src="../assets/Photos/Sonota/close-icon.png" alt="" v-bind:class="{'noimgicon': !select,'imgicon': select}" @click="imgiconclick">

</div>
<div class="all">
<img class="img-all" v-bind:class="{'imgopa': !select}" v-for="(link, index) of imgs" :src="link" :key="index" @click="imgclick">
</div>
</article>
</template>

<script>
export default {
  name: 'Profile',
  components: {},
  data: function () {
    return {
      select: false
    }
  },
  methods: {
    imgclick: function () {
      this.select = true
    },
    imgiconclick: function () {
      this.select = false
    }
  },
  computed: {
    imgs () {
      const files = require.context('../assets/Photos/Gallery/', true, /\.png$/)
      return files.keys().map(x => x ? x.slice(2, x.length) : '').map(x => {
        return require('../assets/Photos/Gallery/' + x)
      })
    }
  }
}
</script>
<style scoped>
article {
  width: auto;
  max-width: 1600px;
  margin: 0 auto;
}
.zoom {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
}
.imgicon {
  position: fixed;
  z-index: 999999;
  width: 17.17px;
  height: 17.17px;
  top: 60px;
  right: 170px;
  cursor: pointer;
  border: 1px solid #c0c0c0;
  padding: 10.5px;
  border-radius: 50%;
}
.imgicon:hover {
  opacity: 0.7;
}
.noimgicon {
  position: fixed;
  width: 17.17px;
  height: 17.17px;
  top: 60px;
  right: 170px;
  display: none;
}
.noselect {
display: none;
}
.all {
  margin-top: 29.5px;
  max-width: 1087.5px;
  margin: 40px auto 0 auto;
}

.img-all {
  width: 217.5px;
  height: 254px;
  padding: 27.5px 72.5px 50px 72.5px;
}
.imgopa {
  opacity: 0.7;
}
.img-all:hover {
  opacity: 1;
  cursor: pointer;
}
.img-tall {
  width: 337.5;
  height: 254px;
  padding: 27.5px 12.5px 50px 12.5px;
  opacity: 0.7;
}
.img-tall:hover {
  opacity: 1;
  cursor: pointer;
}

</style>

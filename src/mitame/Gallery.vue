<template>
<article>
<div class="header">
</div>
<div class="zoomall" v-bind:class="{'no-select': !select,'zoom': select,}">
<img src="../assets/Photos/Sonota/close-icon.png" alt="" v-bind:class="{'noimgicon': !select,'imgicon': select}" @click="imgiconclick">
<img :src="selectdata" alt="" class="zoomimg">
</div>
<div class="all">
<img class="img-all" v-bind:class="{'imgopa': !select}" v-for="(link, index) of imgs" :src="link.a" :key="index" @click="() => imgclick(link.b)">
</div>
</article>

</template>

<script>
export default {
  name: 'Profile',
  components: {},
  data: function () {
    return {
      select: false,
      selectdata: undefined
    }
  },
  methods: {
    imgclick: function (b) {
      this.select = true
      document.body.style.position = 'fixed'
      document.body.style.margin = '0 auto'
      document.body.style.maxWidth = '1087.5px'
      document.body.style.right = '1px'
      document.body.style.left = '0px'
      document.body.style.top = '1px'
      this.selectdata = b
    },
    imgiconclick: function () {
      this.select = false
      document.body.style.position = ''
      document.body.style.margin = ''
      document.body.style.maxWidth = ''
      document.body.style.right = ''
      document.body.style.left = ''
      document.body.style.top = ''
      this.selectdata = undefined
    }
  },
  computed: {
    imgs () {
      const files = require.context('../assets/Photos/Gallery/', true, /\.png$/)
      return files.keys().map(x => x ? x.slice(2, x.length) : '').map(x => {
        return { a: require('../assets/Photos/Gallery/' + x), b: require('../assets/Photos/Gallery-zoom/' + x) }
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
  height: 100vh;
  left: 0;
  background: rgba(255, 255, 255, 0.96);
}
.zoomimg {
  display: block;
  width: 700px;
  max-width: 1600px;
  top: 274px;
  margin: 0 auto;
  position: relative;
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
  left: 0;
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

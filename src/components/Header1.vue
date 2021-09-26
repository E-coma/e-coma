<template>
 <div class="header">
  <div class="title">
    <span class="bosuti">{{ bosuti2 }}</span>
    <span v-if="subTitle == 'profile'" class="subti">{{ subTitle }}
    <span>uiiiiiiiii</span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header1',
  props: {
    subTitle: String
  },
  data: function () {
    return {
      bosuti: 'E-COMA'
    }
  },
  computed: {
    bosuti2: function () {
      const mozi1 = 'E-COMA'
      const mozi2 = '.'
      let mozi3 = mozi1
      mozi3 = mozi1 + mozi2
      return mozi3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
 text-align: left;
}
.header {

}
.bosuti {
  font-size: 30px;
}
.subti {
  font-size: 20px;
}
</style>

<template>
 <div class="header">
  <div class="title">
    <span class="bosuti">E-COMA.</span>
    <span class="subti">{{ subTitle }}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header1',
  props: {
    subTitle: String
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

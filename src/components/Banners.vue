<template>
 <div class="Banners">
     <span>{{ themeName }}</span>
</div>
</template>

<script>
export default {
  name: 'Banners',
  props: {
    themeName: String
  },
  data: function () {
    return {
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
 <div class="Photos">
     <span>{{ themeName }}</span>
</div>
</template>

<script>
export default {
  name: 'Photos',
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

<template>
    <div style="text-align:center;">
    <div class="Photoss">
       <Photos v-for="(tem,index) in themes" :key="index" :themeName="tem">
      </Photos>
    </div>
    </div>
</template>

<script>
import Photos from '../components/Photos.vue'
export default {
  name: 'Gallery',
  components: {
    Photos
  },
  data: function () {
    return {
      themes: ['Blue', 'Green', 'Orange', 'White', 'Sonota']
    }
  }
}
</script>
<style scoped>
</style>
i

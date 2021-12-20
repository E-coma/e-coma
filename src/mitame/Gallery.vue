<template>
    <div style="text-align:center;">
      <Header1 subTitle="gallery"/>
    <div class="Photoss">
       <Photos v-for="(tem,index) in themes" :key="index" :themeName="tem">
      </Photos>
    </div>
    </div>
</template>

<script>
import Header1 from '../components/Header1.vue'
import Photos from '../components/Photos.vue'
export default {
  name: 'Gallery',
  components: {
    Header1,
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
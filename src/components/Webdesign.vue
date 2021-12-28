<template>
    <section>
      <img :src="imgsrc" width="990" alt="" />
      <h1>{</h1>
      <pre>
<slot/>
      </pre>
      <button v-on:click="togithub">git hub</button>
    </section>
</template>

<script>
export default {
  name: 'Webdesign',
  components: {},
  props: ['src', 'imgsrc', 'name'],
  data: function () {
    return {}
  },
  methods: {
    togithub: function () {
      window.location = this.src
    }
  }
}

</script>
<style scoped>
article {
    width: auto;
    max-width: 1600px;
    font-family: '游ゴシック';
}
section {
    width: 100%;
    max-width: 990px;
    margin: 0 auto;
}
pre {
    font-family: '游ゴシック';
    margin: 0;
}
</style>

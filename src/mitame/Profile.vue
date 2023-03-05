<template>
<article>
  <div class="img">
    <img src="../assets/Photos/4.png" alt="" />
  </div>
  <div class="comment">
    <p class="name">EMIRI HIIZUMI</p>
    <div class="text">
      <p>滋賀県出身。</p>
      <p>フィルムカメラでの写真撮影も行っています。</p>
      <p>「webdesign」- ウェブサイト制作物を掲載しています。</p>
      <p>「photos」- 撮影した写真を掲載しています。</p>
      <p>「banners」- バナー制作物を掲載しています。</p>
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'Profile',
  components: {},
  data: function () {
    return {}
  }
}
</script>
<style scoped>
article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
  margin-top: 110px;
}
.img {
  width: 50%;
  text-align: center;
}
.img img {
  width: 100%;
  text-align: center;
}
.comment {
  margin: 0 auto;
}

.name {
  font-size: 29px;
  margin-bottom: 40px;
  letter-spacing: 1.5px;
}
.text {
  font-size: 15px;
  letter-spacing: 1.5px;
  font-family: '游ゴシック';
}
.text p {
  margin: 0;
}
@media screen and (max-width:700px) {
article {
  flex-flow: column;
  margin-top: 50px;
}
.img {
  width: 90%;
  margin: 0 auto;
  text-align: left;
}
.img img {
  width: 100%;
  margin: 0 auto;
  text-align: left;
}
}
</style>

<template>
  <article>
    <div class="comment">
      <p class="title">CONTACT</p>
      <div class="text">
        <form action="">
          <p>NAME<br>
          <input type="text" name="name" id="">
          </p>
          <p>E-MAIL<br>
          <input type="email"></p>
          <p>MESSAGE<br>
          <textarea name="" id=""></textarea></p>
          <button>SEND</button>
        </form>
      </div>
    </div>
    <div class="img">
      <img src="../assets/Photos/Sonota/contact-img.png" height="371" alt="" />
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
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
  margin-top: 110px;
}
.img {
  width: 50%;
  text-align: center;
}
.comment {
  margin: 0 auto;
}

.title {
  text-align: center;
  font-size: 29px;
  margin-top: 0;
  margin-bottom: 40px;
  letter-spacing: 1.5px;
}
.text {
  font-size: 15px;
  letter-spacing: 1.5px;
  font-family: "游ゴシック";
}
.text p {
  margin: 0;
}
</style>

<template>
  <article>
    <div class="comment">
      <p class="title">CONTACT</p>
      <div class="text">
        <form>
          <p>
            <label for="name">NAME<br /></label>
            <input type="text" name="user-name" id="name" />
          </p>
          <p>
            <label for="email">E-MAIL<br /></label>
            <input type="text" id="email" name="user-email" />
          </p>
          <p>
            <label for="comment">MESSAGE<br /></label>
            <textarea name="user-comment" id="comment"></textarea>
          </p>
          <p class="button"><button type="submit">SEND</button></p>
        </form>
      </div>
    </div>
    <div class="img">
      <img src="../assets/Photos/Sonota/contact-img.png" alt="" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Contact',
  components: {},
  data: function () {
    return {}
  }
}
</script>
<style scoped>
article {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
  margin-top: 110px;
  align-items: center;
}
.img {
  width: 80%;
  text-align: center;
}
.img img {
  width: 100%;
  text-align: center;
}
.comment {
  width: 100%;
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

form input,
form textarea {
  border: none;
  border-bottom: 1px solid #707070;
  padding: 4px;
  margin-bottom: 25px;
  width: 90%;
}

textarea {
  height: 68px;
}
.button {
  text-align: center;
}
button {
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #707070;
  padding: 2px 37px;
  letter-spacing: 1.5px;
}

button:hover {
  background-color: #dddddd;
}
@media screen and (max-width:700px) {
article {
  flex-flow: column;
  padding: 10px;
}
.comment{
  margin-bottom: 20px;
}
.img {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.img img {
  width: 100%;
}
}
</style>

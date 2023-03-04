<template>
  <article>
    <section class="watabiwa">
      <a href="https://photocon.vercel.app/"><img src="../assets/Photos/watabiwa-img.jpg" alt="" /></a>
      <div class="titlegroup">
      <a href="https://photocon.vercel.app/"><h1>ワタシノビワコ フォトコンテスト</h1></a>
      <button v-on:click="towatabiwa">GIT HUB</button>
      </div>
      <p>
自主制作として、滋賀県の琵琶湖をメインとしたフォトコンテストの特設サイトを作成しました。<br>
初めてのwebサイト構築であり、レスポンシブ対応にとても苦戦しました。<br>
サイト全体のカラーは琵琶湖をイメージして青ベースにしています。また波をイメージしたトップ画像と、
フッター部分の背景にこだわりました。<br>
写真が好きなあらゆる年代の方に向けてシンプルでわかりやすいデザインを心掛け、また手軽に参加していただけるように
スマホ・一眼レフ・フィルムカメラのどんなカメラでも参加できるコンテストにしました。<br>
      </p>

    </section>
    <section class="ecoma">
      <a href="https://e-coma.vercel.app/"><img src="../assets/Photos/e-coma-img.jpg" alt="" /></a>
      <div class="titlegroup">
      <a href="https://e-coma.vercel.app/"><h1>E-COMA PORTFOLIO.SITE</h1></a>
      <button v-on:click="toecoma">GIT HUB</button>
      </div>
      <p>
私自身のポートフォリオサイトを作成しました。
      </p>
    </section>
        <section class="ecoma">
      <a href="https://coffeeshop-hp.vercel.app/"><img src="../assets/Photos/coffeeandsandwich-img.jpg" alt="" /></a>
      <div class="titlegroup">
      <a href="https://coffeeshop-hp.vercel.app/"><h1>COFFEE AND SANDWICH</h1></a>
      <button v-on:click="toecoma">GIT HUB</button>
      </div>
      <p>
自主制作として、コーヒースタンドのHPを作成しました。<br>
コンセプトは、落ち着いた雰囲気で、男女問わず来店してもらいやすいような
デザインを心掛けました。
      </p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Webdesign',
  components: {},
  data: function () {
    return {}
  },
  methods: {
    towatabiwa: function () {
      window.location = 'https://github.com/E-coma/photocon'
    },
    toecoma: function () {
      window.location = 'https://github.com/E-coma/e-coma'
    }
  }
}
</script>
<style scoped>
article {
  width: 90%;
  max-width: 1600px;
  font-family: "游ゴシック";
  margin: 0 auto;
}
section {
  width: 90%;
  max-width: 990px;
  margin: 57px auto 112px auto;

}
h1 {
  margin: 0;
  margin-right: 10px;
}
.titlegroup {
  display: flex;
}
.titlegroup a {
  text-decoration: none;
  color: #707070;
}

.titlegroup a:hover {
  opacity: 0.8;
}
p {
  font-family: "游ゴシック";
  margin: 0;
}
button {
font-size: 13px;
margin-bottom: 5px;
margin-top: 3px;
}
img{
  width: 100%;
}
@media screen and (max-width:700px) {
p{
  width: fit-content;
}
}
</style>

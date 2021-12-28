<template>
  <article>
    <section>
      <img src="../assets/Photos/Sonota/watabiwa-img.jpg" width="990" alt="" />
      <h1>ワタシノビワコ フォトコンテスト</h1>
      <pre>
自主制作として、滋賀県の琵琶湖をメインとしたフォトコンテストの特設サイトを作成しました。
初めてのwebサイト構築であり、レスポンシブ対応にとても苦戦しました。
私の地元である滋賀県の琵琶湖と、趣味である写真撮影を組み合わせたテーマにしました。
写真が好きなあらゆる年代の方に向けてシンプルでわかりやすいデザインを心掛け、また手軽に参加していただけるように
スマホ・一眼レフ・フィルムカメラのどんなカメラでも参加できるコンテストにしました。
      </pre>
      <button v-on:click="towatabiwa">git hub</button>
    </section>
    <section>
      <img src="../assets/Photos/Sonota/e-coma-img.jpg" width="990" alt="" />
      <h1>E-COMA PORTFOLIO.SITE</h1>
      <pre>
私自身のポートフォリオサイトを作成しました。
      </pre>
      <button v-on:click="toecoma">git hub</button>
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
  width: auto;
  max-width: 1600px;
  font-family: "游ゴシック";
  margin: 0 auto;
}
section {
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
}
pre {
  font-family: "游ゴシック";
  margin: 0;
}
</style>

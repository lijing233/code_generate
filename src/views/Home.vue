<template>
  <div class="container">
    <div class="title">CODE GENERATE</div>
    <div class="imgblock">
      <p>CODE GENERATE</p>
      <img :src="img.aaa" alt="" />
      <p>CODE GENERATE</p>
      <img :src="img.bbb" alt="" />
      <p>CODE GENERATE</p>
      <img :src="img.ccc" alt="" />
      <p>CODE GENERATE</p>
      <img :src="img.ddd" alt="" />
    </div>
  </div>
</template>

<script>
const aaa = require("@/assets/homepage/aaa.png");
const bbb = require("@/assets/homepage/bbb.png");
const ccc = require("@/assets/homepage/ccc.png");
const ddd = require("@/assets/homepage/ddd.png");
export default {
  name: "home",
  data() {
    return {
      img: {
        aaa,
        bbb,
        ccc,
        ddd
      }
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  padding: 30px;
  .title {
    text-align: center;
    font-size: 60px;
    margin-bottom: 50px;
  }
  .imgblock {
    background: #fff;
    padding: 100px;
    img {
      display: block;
      margin: 0 auto;
      width: 300px;
      // wid
    }
    p {
      font-size: 30px;
      text-align: center;
      padding: 15px;
    }
  }
}
</style>

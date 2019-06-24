<template>
  <div>
    <div class="gallery" v-for="item in dataList" :key="`card_${item}_img`">
      <img class="photos" :src="`${publicPath}me.jpg`" :alt="`card_${item}_img`">
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      dataList: [1,2,3,4]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
  .gallery {
    width:110px;            /*宽度*/
    height:180px;          /*高度*/
    border:1px solid #ccc;  /*加一个灰色边框*/
    margin:160px auto;     /*水平居中，高度距离顶部100px*/
    transform-style: preserve-3d; /*设置3d环境*/
    perspective: 800px; /*设置景深为800px*/
    .photos {

    }
  }
</style>

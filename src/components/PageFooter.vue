<!-----------------------------------------------------------------------------
  - Copyright (c) 2019.                                                       -
  - Author: Jarvis.wang $user                                                 -
  - Email: wangjia_1919@aliyun.com                                            -
  ----------------------------------------------------------------------------->

<template>
    <Footer class="footer-wrap">
        Copyright
        <font-awesome-icon :icon="['far', 'copyright']" fixed-width/>
        2017 - {{year}} <b> 瑞风特 </b>版权所有
    </Footer>
</template>

<script>
export default {
  name: 'PageFooter',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="less" scoped>
.footer-wrap{
    text-align: center;
}
</style>

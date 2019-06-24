<template>
    <Footer class="footer-wrap">
        Copyright
        <font-awesome-icon :icon="['far', 'copyright']" fixed-width/>
      2017 - {{year}} <b> Nine Swards </b>版权所有
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
.footer-wrap {
    text-align: center;
    padding: 8px 0;
    font-size: 12px;
}
</style>

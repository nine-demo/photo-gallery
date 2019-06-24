<template>
  <Header
      :style="{position: 'fixed', width: '100%', background:'#fff', zIndex:'9999', boxShadow: '0px 5px 20px #ededed'}">
  </Header>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {
      productCategories: []
    }
  },
  mounted () {
  }

}
</script>

<style lang="less" scoped>

  .layout-logo {
    width: 25%;
    float: left;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    left: 20px;
    text-align: left;
  }

  .layout-nav {
    width: auto;
    margin: 0 20px 0 auto;
    float: right;
  }
</style>

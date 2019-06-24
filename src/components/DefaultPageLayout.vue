<template>
  <Layout :style="{ height: '100%'}">
    <PageHeader></PageHeader>
    <Layout :style="{ marginTop: '74px', height: '100%'}" class="layout">
      <i-content :style="{padding: '0 0 24px', height: '100%', background: '#fff'}">
        <router-view></router-view>
      </i-content>
    </Layout>
    <PageFooter></PageFooter>

    <BackTop></BackTop>
  </Layout>
</template>

<script>
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
export default {
  name: 'defaultPageLayout',
  components: {
    PageFooter,
    PageHeader
  }
}
</script>

<style scoped>

</style>

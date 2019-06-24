<template>
  <div class="home">
    <Scroll :on-reach-bottom="handleReachBottom" :height="500">
      <Row>
        <i-col span="12">
          <Card v-for="(item, index) in dataList" :key="`card_${index}`" style="margin: 32px 0">
            <div></div>
            <div></div>
          </Card>
        </i-col>
        <i-col span="12">
          <Card v-for="(item, index) in dataList" :key="`card_${index}`" style="margin: 32px 0">
            <div></div>
            <div></div>
          </Card>
        </i-col>
      </Row>

    </Scroll>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    handleReachBottom () {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.dataList[this.dataList.length - 1]
          for (let i = 1; i < 11; i++) {
            this.dataList.push(last + i)
          }
          resolve()
        }, 2000)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  padding: 10px 40px;
  .card {

  }
}
</style>

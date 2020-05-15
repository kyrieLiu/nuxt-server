<template>
  <div class="container">
    <el-button @click="requestData">
      请求
    </el-button>
    <el-button @click="toSecond">
      去第二页
    </el-button>
    <div>{{ form }}</div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      form: {}
    }
  },
  methods: {
    requestData () {
      const that = this
      this.$axios.get('/users/getUser').then(function (result) {
        // eslint-disable-next-line no-console
        console.log('result')
        that.form = result.data
      })
    },
    toSecond () {
      this.$router.push('/second')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

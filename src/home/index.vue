<template>
  <div>
    <img src="../../src/assets/img/p3.png" width="100%">
    <div @click="goToCourse">进入课程</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goToCourse () {
      this.$router.push('/content')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

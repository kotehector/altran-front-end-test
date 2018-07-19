<template>
  <div id="app">
    <el-container direction="vertical">
      
      <!-- <TheHeader /> -->

      <el-main>
        <router-view/>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  name: 'App',

  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: lightblue;
  color: #2c3e50;
  .logo {
    width: 25%;
  }
}
</style>

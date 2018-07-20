<template>
  <div id="app">

    <div v-if="activeUser.isActive">  
      <el-container direction="vertical">

        <TheHeader :user="activeUser.data" />
        
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>

    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TheHeader from '@/components/TheHeader'
export default {
  name: 'App',

  computed: {
    ...mapState('user', ['activeUser'])
  },

  components: {
    TheHeader
  },

  methods: {
    ...mapActions('user', [
      'getUser'
    ])
  },

  created () {
    if (localStorage.getItem('user-id')) {
      this.getUser(localStorage.getItem('user-id'))
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/element-variables.scss";

body {
  margin: 0;
  background: $--color-primary;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  // background: $--color-primary;
  color: $--color-text-primary;
  
}
</style>

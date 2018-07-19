<template>
  <div id="app">
    <div v-if="activeUser.isActive">  
      <el-container>
        <el-header
          height="auto">
          <h1>{{ activeUser.data.username || '' }}</h1>
          <font-awesome-icon 
            icon="sign-out-alt"
            @click="onLogout" />
          <GoBackButton />
        </el-header>
        
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
import GoBackButton from '@/components/GoBackButton'
export default {
  name: 'App',

  computed: {
    ...mapState('user', ['activeUser'])
  },

  components: {
    GoBackButton
  },

  methods: {
    ...mapActions('user', [
      'getUser',
      'logout'
    ]),

    async onLogout () {
      try {
        await this.logout()
        this.$router.push('/login')
      } catch (error) {
        
      }
    }
  },

  created () {
    if (localStorage.getItem('user-id')) {
      this.getUser(localStorage.getItem('user-id'))
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/custom-element-theme.scss";

img {
  width: 100%;
  height: auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background: $--color-background;
  color: #2c3e50;
}
</style>

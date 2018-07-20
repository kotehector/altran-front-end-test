<template>
  <el-header
    height="auto">
    <el-row
      type="flex"
      class="row-temp"
      justify="space-between"
      align="middle">
      <h1>Hola, {{ user.username || '' }}</h1>
      <font-awesome-icon
        icon="sign-out-alt"
        @click="onLogout" />
    </el-row>
  </el-header>
</template>

<script>
import { mapActions } from 'vuex'

export default {

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapActions('user', [
      'logout'
    ]),

    async onLogout () {
      try {
        await this.logout()
        this.$router.push('/login')
      } catch (error) {

      }
    }
  }
}
</script>

<style scoped>

</style>

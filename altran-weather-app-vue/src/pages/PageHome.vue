<template>
  <div>
    <h1>Home Papge</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {

  computed: {
    ...mapState(['activeUser'])
  },

  methods: {
    ...mapActions(['logout']),

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

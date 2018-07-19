<template>
  <div>
    <h1>Home Papge</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(["activeUser"])
  },

  methods: {
    ...mapActions(["logout"]),

    async onLogout () {
      try {
        await this.logout()
        this.$router.push('/login')
      } catch (error) {
        
      }
    }
  },
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

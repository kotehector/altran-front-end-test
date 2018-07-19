<template>
  <div>
    <h1>Weather App</h1>
    <el-button
      type="text"
      @click="enter">
      Entrar
    </el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      enter() {
        this.$router.push('/ciudades')
      },
    },
  }
</script>

<style scoped>

</style>
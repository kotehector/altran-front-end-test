<template>
  <div>
    <el-button type="text" @click="goBack">
      Volver
    </el-button>
  </div>
</template>

<script>
  export default {
    name: 'go-back-button',
    
    methods: {
      goBack () {
        this.$router.go(-1)
      },
    },
  }
</script>

<style scoped>

</style>
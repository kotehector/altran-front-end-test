<template>
  <div>
    <el-button
      type="info"
      @click="goBack">
      Volver
    </el-button>
  </div>
</template>

<script>
export default {

  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>

</style>

<template>
  <el-container>
    <el-main>
      <el-row
        type="flex"
        justify="center"
        align="middle">
        <el-col :xs="20" :sm="12">

          <h1>La página que buscas no se encuentra en nuestra App :)</h1>
          <router-link to="/">Volver al inicio</router-link>

        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {}
</script>

<style  lang="scss" scoped>
.el-main {
  height: 100vh;
  text-align: center;
  .el-row {
    height: 100%;
  }
}
</style>

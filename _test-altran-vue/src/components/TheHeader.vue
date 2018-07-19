<template>
  <el-header>
    <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect">
      <el-menu-item index="1" :route="{name: 'home'}">
          <img class="logo" src="@/assets/logo.png">
      </el-menu-item>
      <el-menu-item index="2" :route="{name: 'stocks'}">
        Stocks
      </el-menu-item>
      <el-menu-item index="3" :route="{name: 'portfolio'}">
        Portfolio 
      </el-menu-item>
      <el-submenu  index="4">
        <template slot="title">Final Día</template>
        <el-menu-item index="2-1">Guardar</el-menu-item>
        <el-menu-item index="2-2">Cargar</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      }
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
</style>
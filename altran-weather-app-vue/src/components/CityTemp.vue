<template>
  <el-row
    type='flex'
    class='row-temp'
    justify='center'
    align='middle'>
    <el-col :span='24'>
      <h6>{{ city.dt | moment('dddd, MMMM Do YYYY') }}</h6>
      <h1>{{ city.name }}, {{ city.sys.country }}</h1>
      <div class='temp'>{{ city.main.temp | formatTemp }}º</div>
    </el-col>
  </el-row>
</template>

<script>
export default {

  props: {
    city: {
      type: Object,
      required: true
    }
  },

  filters: {
    formatTemp: (value) => {
      return value.toFixed(1)
    }
  }

}
</script>

<style lang='scss' scoped>
.el-row {
  h6 {
    margin-bottom: .5rem;
  }
  h1 {
    margin-top: 0;
  }
}
</style>

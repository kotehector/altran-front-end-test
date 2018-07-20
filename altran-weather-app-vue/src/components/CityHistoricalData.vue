<template>
  <el-row 
    type="flex"
    class="row-historical-data"
    justify="center"
    align="middle">
    <el-col :span="24">
      <h1>Previsión</h1>
      <!-- <el-carousel :interval="4000" type="card" height="50px">
        <el-carousel-item v-for="item in forecast" :key="item.id">
          <h3>{{ item.main.temp }}</h3>
        </el-carousel-item>
      </el-carousel> -->
      <swiper>
        <swiper-slide v-for="item in forecast" :key="item.id">
          <h3>{{ item.main.temp }}</h3>
        </swiper-slide>
      </swiper>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {

  props: {
    id: {
      type: Number,
      required: true
    },
  },

  data() {
    return {
      forecast: []
    }
  },

  methods: {
    ...mapActions('cities', [
      'getCityForecast5Days'
    ])
  },

  async created () {
    this.forecast = await this.getCityForecast5Days(this.id)
    console.log('FORECAST: ', this.forecast)
  }
}
</script>

<style scoped>

</style>
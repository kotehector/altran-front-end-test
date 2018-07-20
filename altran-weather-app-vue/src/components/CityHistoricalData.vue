<template>
  <el-row
    type="flex"
    class="row-historical-data"
    justify="center"
    align="middle">
    <el-col :span="24">
      <swiper>
        <swiper-slide v-for="day in forecast" :key="day.id">
          <h6>{{ day.dt | moment('DD-MM HH:mm') }}</h6>
          <h3>{{ day.main.temp }}º</h3>
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
    }
  },

  data () {
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

<style lang="scss" scoped>
.swiper-slide {
  h6 {
    margin-bottom: .5rem;
  }
  h3 {
    margin-top: 0;
  }
}
</style>

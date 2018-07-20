<template>
    <el-card
      :class="{
        'bg-cold': city.main.temp > 5 && city.main.temp <= 12,
        'bg-warm': city.main.temp > 12 && city.main.temp <= 19,
        'bg-hot': city.main.temp > 19 && city.main.temp <= 32 }">
      <div slot="header" class="clearfix">
        <el-row
          type="flex"
          class="row-temp"
          justify="space-between"
          align="middle">
          <img
          :src='`http://openweathermap.org/img/w/${city.weather[0].icon}.png`'/>
          <font-awesome-icon
            icon="eye"
            @click="handleGo(city.name)" />
        </el-row>
      </div>

      <CityTemp :city="city" />

      <CityHistoricalData :id="city.id" />

    </el-card>
</template>

<script>
import CityHistoricalData from '@/components/CityHistoricalData'
import CityTemp from '@/components/CityTemp'
export default {

  props: {
    city: {
      type: Object,
      required: true
    }
  },

  components: {
    CityHistoricalData,
    CityTemp
  },

  methods: {
    handleGo (name) {
      console.log(name)
      this.$router.push({name: 'cityDetail', params: { name: name }})
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../assets/scss/element-variables.scss";
.el-card {
  color: $--color-text-primary;
  margin-bottom: 1rem;
  min-height: 20rem;
  /deep/ &__header {
    padding: .8rem;
    border-bottom: none;
  }
  /deep/ &__body {
    height: auto;
    padding: .8rem;
    text-align: center;
    .row-temp {
      // height: 100%;
    }
    .temp {
      font-size: 4rem;
    }
  }
}

.bg-cold {
  background: #bbe4f0
}
.bg-warm {
  background: #fff09b
}
.bg-hot {
  background: #ffbb6d
}
</style>

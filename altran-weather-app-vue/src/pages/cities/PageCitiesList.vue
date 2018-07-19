<template>
  <div class="">
    <h1>Lista de Ciudades</h1>
    <el-input v-model="queryCity.q" label=""></el-input>
    <el-button type="text" @click="findCity">Buscar</el-button>
    <hr>
      <el-card 
        :body-style="{ padding: '0px' }"
        v-for="city in cities"
        :key="city.id">
        <!-- <img :src='addImageCity(city.name)' class="image"> -->
        <div style="padding: 14px;">
          <span>{{city.name }}</span>
          <span>T: {{city.main.temp }} ºC</span>
          <span>H: {{city.main.humidity }} %</span>
          <span>Max: {{city.main.temp_max }} ºC</span>
          <span>Min: {{city.main.temp_min }} ºC</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <div
              v-for="weather in city.weather"
              :key="weather.id">
              <img 
                style="width:50px"
                :src='`http://openweathermap.org/img/w/${weather.icon}.png`'/>
              <span>{{ weather.main }} ºC</span>
            </div>
            <el-button type="text" @click="handleGo(city.name)">Ver detalle</el-button>
          </div>
        </div>
      </el-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  
  data () {
    return {
      currentDate: new Date()
    }
  },
  computed: {
    ...mapState('cities', [
      'cities',
      'queryCity'
    ])
  },

  methods: {
    ...mapActions('cities', [
      'getCities',
      'setQueryCity',
      'getCityByName'
    ]),

    ...mapMutations('cities', [
      'SET_CITIES'
    ]),

    async findCity () {
      this.setQueryCity(this.queryCity)
      const city = await this.getCityByName()
      if (city.id) {
        this.cities.unshift(city)
        this.SET_CITIES(this.cities)  
        this.queryCity.q = ''
        this.$notify({
          title: 'La ciudad se ha añadido correctamente a tu lista :)',
          type: 'success',
          position: 'top-left',
          customClass: 'notify-success'
        })
      } else {
        this.queryCity.q = ''
        this.$notify({
          title: 'La ciudad que buscas no existe o no esta en nuestra base de datos :)',
          type: 'error',
          position: 'top-left',
          customClass: 'notify-error'
        })  
      }
    },

    handleGo (name) {
      console.log(name)
      this.$router.push({ name: 'cityDetail', params: { name: name }})
    },

    // async addImageCity (name) {
    //   try {
    //     let response = await this.axios.get(
    //     `https://pixabay.com/api/?key=8736190-865a9fb42edeeac362e9d5ce4&?q=${name}+skyline`)
    //     console.log('img: ', response.data.hits[0].webformatURL)
    //     return response.data.hits[0].webformatURL
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },

  async created () {
    await this.getCities()
    setInterval(async() => {
      try {
        await this.getCities()
      } catch (error) {
        alert(error)
        this.$notify({
          title:'error',
          type: 'error',
          position: 'bottom-left',
          customClass: 'notify-error'
        })
      }
    }, 180000)
    // }, 10000)
  }
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="">
    <h1>Lista de Ciudades</h1>
    <el-input 
      v-model="queryCity.q"
      label="Busca una ciudad"
      @blur="findCity"
      @keyup.enter.native="findCity"></el-input>
    <hr>

    <CitiesList :cities="cities" />
      
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import CitiesList from '@/components/CitiesList'

export default {
  
  data () {
    return {
      currentDate: '',
      urlImage: ''
    }
  },

  components: {
    CitiesList,
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
      const city = await this.getCityByName(this.queryCity.q)
      if (city.id) {
        this.cities.unshift(city)
        this.SET_CITIES(this.cities)  
        this.queryCity.q = ''
        this.currentDate = new Date(),
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
    }
  },

  filters: {
    formatterDate(d) {
      let date = new Date(d)
      return date.toLocaleTimeString('es-ES')
    }
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
    // }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  // width: 100%;
  min-height: 20rem;
  margin-bottom: .5rem;
}
</style>
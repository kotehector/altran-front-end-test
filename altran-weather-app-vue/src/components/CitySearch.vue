<template>
  <div>
    <el-input
      v-model='queryCity.q'
      placeholder='Busca una ciudad'
      @blur='findCity'
      @keyup.enter.native='findCity'></el-input>
    <hr>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('cities', [
      'cities',
      'queryCity'
    ])
  },

  methods: {
    ...mapActions('cities', [
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
  }
}
</script>

<style scoped>

</style>

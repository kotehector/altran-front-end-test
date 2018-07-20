<template>
  <div class="cities-list">

    <CitySearch />
    <CitiesList :cities="cities" />

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CitiesList from '@/components/CitiesList'
import CitySearch from '@/components/CitySearch'

export default {

  components: {
    CitiesList,
    CitySearch
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
    ])
  },

  async created () {
    await this.getCities()
    setInterval(async () => {
      try {
        await this.getCities()
      } catch (error) {
        alert(error)
        this.$notify({
          title: 'error',
          type: 'error',
          position: 'bottom-left',
          customClass: 'notify-error'
        })
      }
    }, 180000)
  }

}
</script>

<style lang="scss" scoped>
.el-card {
  min-height: 20rem;
  margin-bottom: .5rem;
}
</style>

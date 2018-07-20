<template>
  <div>
    <GoBackButton />

    <el-card class="box-card" v-if="city">
      <div slot="header" class="clearfix">
        <h1>Ciudad: {{ name }}</h1>

      </div>
      <!-- <img v-if="urlImage" :src='urlImage' class="image"> -->
      <span>T: {{city.main.temp }} ºC</span>
      <span>H: {{city.main.humidity }} %</span>
      <span>Max: {{city.main.temp_max }} ºC</span>
      <span>Min: {{city.main.temp_min }} ºC</span>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import GoBackButton from '@/components/GoBackButton'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      city: {},
      urlImage: ''
    }
  },

  components: {
    GoBackButton
  },

  methods: {
    ...mapActions('cities', [
      'getCityByName'
    ]),

    async addImageCity (name) {
      try {
        let response = await this.axios.get(
          `https://pixabay.com/api/?key=8736190-865a9fb42edeeac362e9d5ce4&?q=${name}`)
        this.urlImage = response.data.hits[0].webformatURL
        console.log('img: ', this.urlImage)
        return this.urlImage
      } catch (error) {
        console.log(error)
      }
    }
  },

  async created () {
    try {
      this.city = await this.getCityByName(this.name)
      this.addImageCity(this.name)
    } catch (error) {
    }
  }
}
</script>

<style scoped>

</style>

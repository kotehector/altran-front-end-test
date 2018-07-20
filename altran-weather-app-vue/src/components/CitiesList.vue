<template>
  <el-row :gutter="10">
    <el-col 
      :xs="24" :sm="12" :md="6"
      v-for="city in cities"
      :key="city.id">
      
      <CitiesListItem :city="city" />

    </el-col>
  </el-row>
</template>

<script>
import CitiesListItem from "@/components/CitiesListItem";
export default {

  props: {
    cities: {
      type: Array,
      required: true
    }
  },

  components: {
    CitiesListItem,
  }
  
}
</script>

<style scoped>

</style>
<template>
  <div>
    <h1>Ciudad: {{ name }}</h1>
    <!-- <el-card class="box-card" v-if="transaction">
      <div slot="header" class="clearfix">
        <h3>Detalle de la Transacción: <span>{{ transaction.transaction_name  }}</span></h3>
        <el-button type="text">Enviar</el-button>
        <go-back-button />
      </div>
      <el-collapse v-model="activeData" @change="handleChange">
        <el-collapse-item title="Info" name="1">
          <div>
            <p>Id Mensajero: {{ transaction.courier_name }}</p>
            <p>Fecha de Creación: {{ transaction.created_at }}</p>
            <p>Cantnamead total de dinero: {{ transaction.money_amount }}</p>
            <p>¿Nuevo Usuario? {{ transaction.new_user }}</p>
            <p>Id de Usuario: {{ transaction.user_name }}</p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Origen / Destino" name="2">
          <el-row :gutter="10">
            <el-col :span="12">
              <div v-if="transaction.origin">
                <h2>Origin</h2>
                <h3>ID:</h3>
                <p>{{ transaction.origin.name }}</p>
                <h3>Descripción:</h3>
                <p>{{ transaction.origin.description }}</p>
                <h3>Mapa</h3>
                <img :src="originMapUrl" alt="">
                <p>Latitud: <span>{{ transaction.origin.lat }}</span> - Longitud: <span>{{ transaction.origin.lng }}</span></p>
              </div>
            </el-col>
            <el-col :span="12">
              <div v-if="transaction.destination">
                <h2>Destino</h2>
                <h3>ID:</h3>
                <p>{{ transaction.destination.name }}</p>
                <h3>Descripción:</h3>
                <p>{{ transaction.destination.description }}</p>
                <h3>Mapa</h3>
                <img :src="destinationMapUrl" alt="">
                <p>Latitud:<span>{{ transaction.destination.lat }}</span> - Longitud: <span>{{ transaction.destination.lng }}</span></p>
              </div>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card> -->
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

    data() {
      return {
        city: {},
        originMapUrl: '',
        destinationMapUrl: '',
        activeData: ['1', '2']
      }
    },

    components: {
      GoBackButton
    },

    methods: {
      ...mapActions('transactions', [
        'getTransactionById'
      ]),

      handleChange(val) {
        console.log(val);
      },

      async getImageMap (lat, lng, state) {
        try {
          let response = await this.axios.get(
          `https://www.mapquestapi.com/staticmap/v5/map?key=cqsmsbNRfMi3H4TpMwIgcyDmhtZyj7sV&center=${lat},${lng},${state}&size=600,400@2x&zoom=10`)
          return response.config.url
        } catch (error) {
          console.log(error)
        }
      }
    },

    async created () {
      try {
        let query = await this.queryTransactions
        this.transaction = await this.getTransactionById(this.name, this.queryTransactions)
        this.originMapUrl = await this.getImageMap(this.transaction.origin.lat, this.transaction.origin.lng, this.transaction.origin.name)
        this.destinationMapUrl = await this.getImageMap(this.transaction.destination.lat, this.transaction.destination.lng, this.transaction.destination.name)
        console.log('TRANSACTION ------ ', this.transaction)
      } catch (error) {
        console.log('ERROR TRANSACTION ------ ', error)
      }
    }
  }
</script>

<style scoped>

</style>
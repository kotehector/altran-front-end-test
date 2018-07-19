<template>
  <el-container>
    <el-main>
      <el-row
        type="flex"
        justify="center"
        align="middle">
        <el-col :xs="20" :sm="12">
          <font-awesome-icon 
            icon="sun"
            color="primary" />
          <h1>Weahter App</h1>
          <el-form 
            :model="loginForm" 
            :rules="rules" 
            ref="loginForm"
            class="login-form">
            <el-form-item prop="username">
              <el-input 
                v-model="loginForm.username"
                placeholder="Usuario"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input 
                type="password"
                placeholder="Contraseña"
                v-model="loginForm.password"
                auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button 
                type="primary" 
                @click="submitForm('loginForm')">
                Entrar
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "Introduce tu nombre de usuario",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Introduce tu contraseña",
            trigger: "blur"
          }
        ]
      }
    };
  },

  computed: {
    ...mapState('user', ['activeUser'])
  },

  methods: {
    ...mapActions('user', ['login']),

    submitForm(loginForm) {
      this.$refs[loginForm].validate(async valid => {
        if (valid) {
          let load = this.$loading({
            lock: true,
            text: "Iniciando sesión ..."
          })

          try {
            const data = {
              username: this.loginForm.username,
              password: this.loginForm.password
            }

            await this.login({
              password: data.password,
              username: data.username
            })

            load.close()
            this.$router.push('/')

          } catch (error) {
            console.log("LOGIN CATCH: ", error)
            this.$notify({
              title:
                "Datos de usuario incorrectos, revisa el formulario y vuelve a intentarlo :)",
              type: "error",
              position: "bottom-left",
              customClass: "notify-error"
            });
            this.$refs[loginForm].resetFields();
            load.close();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
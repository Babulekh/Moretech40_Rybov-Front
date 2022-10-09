<template>
  <div class="v-authForm">
    <div class="v-authForm__formWrapper" v-if="!isRegister">
      <form class="v-authForm__form v-authForm__form_login" action="" @submit.prevent="onSubmit">
        <h2 class="v-authForm__formTitle">Вход</h2>
        <input class="v-authForm__formInput" v-model="username" type="text" placeholder="Имя пользователя">
        <input class="v-authForm__formInput" v-model="password" type="password" placeholder="Пароль">
        <input class="v-authForm__submitButton" type="submit" @click="doLogin">
        <p class="v-authForm__changeMode">Нет аккаунта? <span class="v-authForm__changeModeButton"
            @click="isRegister = !isRegister">Зарегистрироваться</span></p>
      </form>
    </div>
    <div class="v-authForm__formWrapper" v-else>
      <form class="v-authForm__form v-authForm__form_register" action="" @submit.prevent="onSubmit">
        <h2 class="v-authForm__formTitle">Регистрация</h2>
        <input class="v-authForm__formInput" v-model="name" type="text" placeholder="Имя">
        <input class="v-authForm__formInput" v-model="surname" type="text" placeholder="Фамилия">
        <input class="v-authForm__formInput" v-model="username" type="text" placeholder="Имя пользователя">
        <input class="v-authForm__formInput" v-model="password" type="password" placeholder="Пароль">
        <input class="v-authForm__submitButton" type="submit" @click="doLogin">
        <p class="v-authForm__changeMode">Уже есть аккаунт? <span class="v-authForm__changeModeButton"
            @click="isRegister = !isRegister">Войти</span></p>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/mixins/api'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isRegister: false,
      name: "",
      surname: "",
      username: "",
      password: ""
    }
  },
  mixins: [
    api
  ],
  methods: {
    async doLogin() {
      const authData = await this.auth(this.username)
      if (authData.username) {
        this.$store.commit('auth/login', authData.username)
        window.location.assign(`/${authData.username}`);
      }
    },
    doRegister() {

    },
    onSubmit() {

    }
  },
  computed: {
    ...mapGetters({
      getUsername: 'auth/getUsername',
    })
  }
}
</script>

<style lang="scss">
.v-authForm__formWrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-authForm__form {
  display: flex;
  flex-direction: column;
  width: 30rem;
}

.v-authForm__formTitle {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.v-authForm__formInput {
  padding: 0.5rem 1rem;
  margin-bottom: 1.2rem;
}

.v-authForm__submitButton {
  margin-bottom: 2rem;
  padding: 0.6rem 1.2rem;
}

.v-authForm__changeModeButton {
  cursor: pointer;
}
</style>
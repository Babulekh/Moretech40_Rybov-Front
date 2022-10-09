<template>
  <div class="v-header">
    <div class="v-header__avatarWrap">
      <img :src="require('@/static/avatar.png')" alt="" class="v-header__avatar" />
    </div>
    <h1 class="v-header__username">
      {{ username }}
    </h1>
    <hr />
    <div class="v-header__balance">
      {{ balance }}
    </div>
    <hr />
    <div class="v-header-menu">
      <ul>
        <li>Кошелёк</li>
        <li>Переводы</li>
        <li>Настройки</li>
        <li>История</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  props: {
    balance: String,
  },
  mounted() {
    this.username = document.cookie.split('=')[1];
  },
}
</script>

<style lang="scss">
.v-header {
  width: 300px;
  height: 100vh;
  padding: 32px;
  background: linear-gradient(177.23deg, $colorGreenGradient -13.49%, $colorBlueGradient 86.64%);
}

.v-header__avatarWrap {
  width: fit-content;
  margin: 16px auto 32px;
}

.v-header__avatar {
  width: 180px;
  height: 180px;
  border: 5px solid $colorWhite;
  border-radius: 50%;
}

.v-header__username {
  width: fit-content;
  margin: 0 auto;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  color: $colorWhite;
}
</style>
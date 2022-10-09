<template>
  <div class="v-page">
    <Header />
    <div class="v-page__container">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';


export default {
  components: { Header, Footer }
}
</script>

<style lang="scss">
.v-page {
  display: flex;
}

.v-page__container {
  padding: 40px;
}
</style>

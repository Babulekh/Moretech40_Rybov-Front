<template>
  <div class="v-page">
    <Header />
    <slot>

    </slot>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Header from './Header.vue';


export default {
  components: {
    Footer,
    Header
  }
}
</script>

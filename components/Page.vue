<template>
    <div class="v-page">
        <Header />
        <slot></slot>
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

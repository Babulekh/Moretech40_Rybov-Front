<template>
  <div>
    <h1>{{ username }}</h1>
    <Wallet />
  </div>
</template>

<script>
import Wallet from '~/components/Wallet.vue';


export default {
  name: 'Personal',
  components: {
    Wallet
  },
  data() {
    return {

    };
  },
  async asyncData({ params }) {
    // todo fetching data from our api -> getUser()
    return {
      username: params.username,
    };
  }
}
</script>

<style>

</style>
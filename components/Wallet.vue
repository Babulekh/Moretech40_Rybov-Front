<template>
  <div>
    <h2>Кошелёк</h2>
    <p>Баланс: {{ userBalance }}</p>
  </div>
</template>

<script>
import api from '~/mixins/blockhainApi.js';


export default {
  mixins: [
    api,
  ],
  data() {
    return {
      publicKey: '0x79a56DcA91B812cc71264c8A60638D64F7435BC9', // todo setting public key from user's data
      userBalance: 0,
    };
  },
  props: {

  },
  async mounted() {
    const userBalanceObject = await this.getWalletBalance(this.publicKey);
    this.userBalance = userBalanceObject.coinsAmount;
  }
}
</script>

<style lang="scss">

</style>
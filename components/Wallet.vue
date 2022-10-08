<template>
  <div>
    <h2>Кошелёк</h2>
    <p>Баланс: {{ userBalance }}</p>
    <p>Адрес: {{ publicKey }}</p>
  </div>
</template>

<script>
import api from '@/mixins/blockhainApi.js';


export default {
  mixins: [
    api,
  ],
  data() {
    return {
      userBalance: 0,
    };
  },
  props: {
    publicKey: String,
  },
  async mounted() {
    const userBalanceObject = await this.getWalletBalance(this._props.publicKey);
    this.userBalance = userBalanceObject.coinsAmount;
  }
}
</script>

<style lang="scss">

</style>
<template>
  <div class="v-wallet">
    <p class="v-wallet__title">Текущий баланс</p>
    <p class="v-wallet__balance">{{ userBalance }}</p>

    <p class="v-wallet__addressTitle">Адрес кошелька</p>
    <p class="v-wallet__address">{{ publicKey }}</p>
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
  async updated() {
    if (this.publicKey) {
      const userBalanceObject = await this.getWalletBalance(this.publicKey);
      this.userBalance = userBalanceObject.coinsAmount;
    } else {
      console.log('no');
    }
  },
}
</script>

<style lang="scss">
.v-wallet {
  width: 600px;
  padding: 60px;
  border-radius: 30px;
  background: linear-gradient(177.23deg, $colorGreenGradient -13.49%, $colorBlueGradient 86.64%);
}

.v-wallet__title,
.v-wallet__addressTitle {
  font-size: 20px;
  line-height: 30px;
  color: $paleGreen;
}

.v-wallet__balance {
  margin-bottom: 70px;
  font-size: 48px;
  line-height: 72px;
  color: $colorWhite;
}

.v-wallet__address {
  font-size: 16px;
  line-height: 24px;
  color: $colorWhite;
}
</style>
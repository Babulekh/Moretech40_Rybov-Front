<template>
  <div class="userProfile" v-if="!userObject.detail">
    <h1>{{ userObject.username }}</h1>
    <Wallet :publicKey="userObject.publicKey" />
  </div>
  <div v-else>
    User with {{ username }} username not found
  </div>
</template>

<script>
import Wallet from '@/components/Wallet.vue';

import api from '@/mixins/api.js';


export default {
  name: 'Personal',
  mixins: [api],
  props: {
    username: String,
  },
  components: {
    Wallet,
  },
  data() {
    return {
      userObject: {},
    };
  },
  async mounted() {
    this.userObject = await this.getUser(this._props.username);
  }
}
</script>

<style lang="scss">

</style>
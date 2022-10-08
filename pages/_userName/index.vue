<template>
  <Page v-if="!userObject.detail">
    <h1>{{ userObject.username }}</h1>
    <Wallet />
    {{ userObject }}
  </Page>
  <Page v-else>
    {{ userObject.detail }}
  </Page>
</template>

<script>
import Wallet from '~/components/Wallet.vue';
import Page from '~/components/Page.vue';

import api from '~/mixins/api.js';


export default {
  name: 'Personal',
  mixins: [api],
  components: {
    Wallet,
    Page
  },
  data() {
    return {
      usernameParam: '',
      userObject: {},
    };
  },
  async asyncData({ params }) {
    return {
      usernameParam: params.username,
    };
  },
  async mounted() {
    this.userObject = await this.getUser(this.usernameParam);
  }
}
</script>

<style lang="scss">

</style>
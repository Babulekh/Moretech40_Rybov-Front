<template>
  <Page>
    <UserProfile :username="usernameParam" />
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
import UserProfile from '@/components/UserProfile.vue';


export default {
  name: 'UserPage',
  components: {
    Page,
    UserProfile
  },
  async asyncData({ params }) {
    return {
      usernameParam: params.userName,
    };
  },
}
</script>

<style lang="scss">

</style>
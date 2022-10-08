<template>
  <Page>
    <Section size="S">
      <h1 class="v-testTitle">Hello</h1>
      
    </Section>
  </Page>
</template>

<script>
import Page from '~/components/Page.vue';
import Section from '~/components/Section.vue';
export default {
  name: "Auth",
  components: { Page, Section }
}
</script>

<style lang="scss">
.v-testTitle {
  color: $accentRed;
}
</style>

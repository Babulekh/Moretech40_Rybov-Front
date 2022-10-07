<template>
  <Page>
    <div class="container">
      <Section size="S">
        <h1 class="v-testTitle">Hello</h1>
      </Section>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/Page.vue";
import Section from "@/components/Section.vue";
export default {
  components: {
    Page,
    Section,
  },
};
</script>

<style lang="scss">
.v-testTitle {
  color: $accentRed;
}
</style>
<template>
  <Page>
    <div class="container">
      <Section size="S">
        <h1 class="v-testTitle">Hello</h1>
        <BasicButton>Кнопка</BasicButton>
      </Section>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/Page.vue";
import Section from "@/components/Section.vue";
import BasicButton from "~/components/buttons/templates/BasicButton.vue";
export default {
  components: {
    Page,
    Section,
    BasicButton
},
};
</script>

<style lang="scss">
.v-testTitle {
  color: $accentRed;
}
</style>
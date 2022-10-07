<template>
  <div class="v-button" :class="buttonClass" :href="buttonHref">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    buttonHref: {
      type: String,
    },
    buttonClass: {
      type: String,
    },
  },
};
</script>

<style>

</style>
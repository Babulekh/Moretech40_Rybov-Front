<template>
  <div class="v-section" :class="`v-section_size_${size}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "",
      validator(value) {
        return ["S", "M", "L", "noMargin", ""].includes(value);
      },
    },
  },
};
</script>

<style lang="scss">
.v-section {
  margin-bottom: 12rem;
  &_size {
    &_L {
      margin-bottom: 9rem;
    }
    &_M {
      margin-bottom: 6rem;
    }
    &_S {
      margin-bottom: 3rem;
    }
    &_noMargin {
      margin-bottom: 0;
    }
  }
}
</style>

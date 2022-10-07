<template>
  <Button>
    <div class="v-basicButton">
      <slot></slot>
    </div>
  </Button>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  props: {
    text: String,
  },
};
</script>

<style>
.v-basicButton {
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  width: fit-content;
  cursor: pointer;
}
</style>

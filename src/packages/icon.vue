<template>
  <svg class="dj-icon" aria-hidden="true">
    <use :xlink:href="`#icon${icon}`" />
  </svg>
</template>
<script>
import "../styles/icon";
export default {
  props: {
    icon: String
  },
  name: "dj-icon"
};
</script>
<style lang="scss">
.dj-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
<template>
  <svg class="dc-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>
<script>
import "../styles/icon";
export default {
  props: {
    icon: String
  },
  name: "dc-icon"
};
</script>
<style lang="scss">
.dc-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
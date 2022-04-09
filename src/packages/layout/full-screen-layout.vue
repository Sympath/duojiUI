<template>
  <section v-if="innerVisible" class="full-screen-dialog">
    <slot />
  </section>
</template>

<script>
export default {
  name: "full-screen",
  props: {
    visible: {
      default: false,
      type: Boolean,
    },
  },
  watch: {
    innerVisible: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          document.documentElement.style.overflow = "hidden";
        } else {
          document.documentElement.style.overflow = "scroll";
        }
      },
    },
  },
  computed: {
    innerVisible() {
      return this.visible;
    },
  },
  beforeDestroy() {
    document.documentElement.style.overflow = "scroll";
  },
};
</script>

<style lang="less" scoped>
.full-screen-dialog {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  background-color: #fff;
  margin: 0 auto;
  overflow: scroll;
}
</style>

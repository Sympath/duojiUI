<template>
  <div class="full-wrapper">
    <el-button
      @click="
        () => {
          this.visible = true;
        }
      "
      >显示全屏</el-button
    >
    <full-screen
      :style="{
        backgroundColor: 'rgba(1,1,1,0.5)',
      }"
      :visible="visible"
    />
  </div>
</template>

<script>
export default {
  created() {},
  async mounted() {
    await this.initList();
  },
  props: {},
  data() {
    return {
      visible: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    async initList() {},
  },
};
</script>
<style scoped lang="less">
.full-wrapper {
}
</style>

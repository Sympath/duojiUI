<template>
  <div class="three-columns-case-wrapper">
    <el-select v-model="mode" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="three-column-wrap">
      <three-column :leftWidth="leftWidth" :rightWidth="leftWidth" :mode="mode">
        <template slot="left">
          <div class="item">左侧</div>
        </template>
        <template slot="center">
          <div class="item">中间</div>
        </template>
        <template slot="right">
          <div class="item">右侧1</div>
          <div class="item">右侧</div>
        </template>
      </three-column>
    </div>
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
      mode: "holy-grail",
      leftWidth: "100px",
      mutiWidth: ["100px"],
      options: [
        {
          value: "holy-grail",
          label: "圣杯",
        },
        {
          value: "threesome-wing",
          label: "双飞翼",
        },
      ],
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
.three-columns-case-wrapper {
  .three-column-wrap {
    border: 1px solid #2c3e50;
  }
  /deep/ .left {
    // #center > .inline-mixin(200px);
    background-color: green;
    height: 200px;
  }
  /deep/ .center {
    height: 200px;
    background-color: gray;
  }
  /deep/ .inner {
    height: 200px;
    background-color: gray;
  }
  /deep/ .right {
    height: 200px;
    background-color: yellow;
  }
}
</style>

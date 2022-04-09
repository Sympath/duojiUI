<template>
  <div class="muti-columns-case-wrapper">
    <el-select v-model="mode" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="muti-column-wrap">
      <muti-column :mutiWidths="mutiWidths" :mode="mode">
        <template slot="column-1">
          <div class="item">1</div>
        </template>
        <template slot="column-2">
          <div class="item">2</div>
        </template>
        <template slot="right">
          <div class="item">右侧1</div>
          <div class="item">右侧</div>
        </template>
      </muti-column>
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
      mode: "float",
      leftWidth: "100px",
      mutiWidths: ["100px", "100px"],
      options: [
        {
          value: "float",
          label: "非等高布局",
        },
        {
          value: "flex",
          label: "等高布局-移动端推荐",
        },
        {
          value: "table",
          label: "等高布局-pc端推荐",
        },
        {
          value: "position",
          label: "脱离文档流",
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
.muti-columns-case-wrapper {
  .muti-column-wrap {
    border: 1px solid #2c3e50;
  }
  /deep/ .column-1 {
    // #center > .inline-mixin(200px);
    background-color: green;
  }
  /deep/ .column-2 {
    // #center > .inline-mixin(200px);
    background-color: gray;
  }
  /deep/ .right {
    // .center-flex;
    // justify-content: space-around;
    background-color: yellow;
    // .item {
    //   #center > .flex;
    //   width: 100px;
    //   height: 100%;
    //   background-color: orange;
    // }
  }
  /deep/ .right-fix {
    background-color: yellow;
  }
}
</style>

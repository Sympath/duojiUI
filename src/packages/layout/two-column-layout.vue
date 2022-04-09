<template>
  <div class="two-column-wrapper clearfix" :class="mode">
    <!-- 定宽 -->
    <div class="left" :style="leftStyleObj">
      <slot name="left" />
    </div>
    <div class="right-fix" :style="rightStyleObj" v-if="mode === 'float'">
      <div class="right">
        <slot name="right" />
      </div>
    </div>
    <!-- 自适应容器 -->
    <div class="right clearfix" :style="rightStyleObj" v-else>
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'two-column',
  components: {},
  created() {},
  async mounted() {
    await this.initList();
  },
  props: {
    leftWidth: {
      type: String,
      default: "0",
    },
    mode: {
      type: String,
      default: "float",
    }, // pc m equl-high position
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    leftStyleObj() {
      return {
        width: this.leftWidth,
      };
    },
    rightStyleObj() {
      let modeMap = {
        float: {
          width: `calc(100% - ${this.leftWidth})`,
          // marginLeft: this.leftWidth,
        },
        table: {},
        position: {
          left: this.leftWidth,
          top: 0,
        },
        flex: {},
      };
      return modeMap[this.mode] || {};
    },
  },
  methods: {
    async initList() {},
  },
};
</script>
<style scoped lang="less">
@import "../less/common.less";

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
// PC端首选
.float {
  // #layout > #two-column .float-bfc-mixin();
  #layout > #two-column .float-clear-mixin();
}
// 移动端首选
.flex {
  #layout > #two-column .flex-mixin();
}
// 等高布局首选
.table {
  #layout > #two-column .table-mixin();
}
// 需要脱离文档流首选
.position {
  #layout > #two-column .position-mixin();
}
</style>

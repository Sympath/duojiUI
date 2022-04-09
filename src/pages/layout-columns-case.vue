<template>
  <div id="app" class="app">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="两列-右侧自适应布局" name="1">
        <two-columns-case />
      </el-collapse-item>
      <el-collapse-item title="多列-右侧自适应布局" name="2">
        <muti-columns-case />
      </el-collapse-item>
      <el-collapse-item title="三列-中间自适应布局" name="3">
        <three-columns-case />
        aaa
      </el-collapse-item>
      <el-collapse-item title="全屏弹窗" name="4">
        <full-screen-layout-case />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import TwoColumnsCase from "./layout-columns/two-columns-case";
import MutiColumnsCase from "./layout-columns/muti-columns-case";
import ThreeColumnsCase from "./layout-columns/three-columns-case";
import FullScreenLayoutCase from "./layout-columns/full-screen-layout-case";
export default {
  name: "App",
  components: {
    TwoColumnsCase,
    MutiColumnsCase,
    ThreeColumnsCase,
    FullScreenLayoutCase,
  },
  data() {
    return {
      activeNames: 1,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../packages/less/common.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  // @columns: 40px;
  // /deep/ .muti-layout-wrapper.float {
  //   #layout > #muti-column > .float-margin-mixin(@columns);
  // }
}
</style>

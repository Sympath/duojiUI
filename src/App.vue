<template>
  <div id="app">
    <dj-container>
      <dj-aside class="app-aside" width="200px">
        <h1>
          <router-link to="/">首页</router-link>
        </h1>
        <h1>
          <router-link to="/button">按钮组件</router-link>
        </h1>
        <h1>
          <router-link to="/row">Grid布局组件</router-link>
        </h1>
        <h1>
          <router-link to="/container">Container布局</router-link>
        </h1>
        <h1>
          <router-link to="/form">Form表单组件</router-link>
        </h1>
        <h1>
          <router-link to="/layout-columns-case">多列布局</router-link>
        </h1>
      </dj-aside>
      <dj-container>
        <dj-header class="app-header">DUOJI组件库 预览区</dj-header>
        <dj-main class="app-main">
          <router-view></router-view>
        </dj-main>
        <dj-footer class="app-footer"></dj-footer>
      </dj-container>
    </dj-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    window.$vm = this;
  },
};
</script>

<style lang="scss">
#app {
  overflow-x: hidden;
}
p {
  margin: 5px;
  font-size: 14px;
}
.app-wrapper {
  margin: 0 auto;
}
.app {
  &-aside {
    background-color: #d3dce6;
    text-align: center;
    line-height: 200px;
  }
  &-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
    height: 60px;
    text-align: center;
  }
  &-footer {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
    height: 60px;
    text-align: center;
  }
}
</style>

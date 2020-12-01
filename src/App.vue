<template>
  <div id="app">
   <h1>按钮类型</h1>
    <dc-button iconPosition="left" type="warning">默认按钮</dc-button>
    <dc-button iconPosition="right" type="primary">默认按钮</dc-button>
    <dc-button iconPosition="right" type="danger">默认按钮</dc-button>
    <dc-button iconPosition="right" type="default">默认按钮</dc-button>
    <dc-button iconPosition="right" type="success">默认按钮</dc-button>
    <h1>带icon的按钮</h1>
    <dc-button :icon='icon' iconPosition="left" type="warning">默认按钮</dc-button>
    <dc-button :icon='icon' iconPosition="right" type="warning">默认按钮</dc-button>
     <h1>loading的按钮</h1>
    <dc-button :icon='icon'  loading iconPosition="right" type="warning">默认按钮</dc-button>
     <h1>loading的按钮</h1>
    <dc-button :icon='icon' @click="handleClick" iconPosition="right" type="warning">默认按钮</dc-button>
     <h1>按钮组</h1>
      <dc-button-group>
        <dc-button icon='leftarrow' iconPosition="left" type="warning">默认按钮</dc-button>
        <dc-button icon='youjiantou' @click="handleClick" iconPosition="right" type="warning">默认按钮</dc-button>
      </dc-button-group>
   <div> <dc-icon
        :icon="icon"
        v-if="icon"
        class="icon"
    ></dc-icon></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
      return {
        icon: 'sousuo'
      }
  },
  methods: {
    handleClick(){
      alert('11')
    }
  }
}
</script>

<style lang="scss">

</style>

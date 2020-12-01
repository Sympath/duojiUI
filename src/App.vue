<template>
  <div id="app">
    <dc-button :icon='icon' iconPosition="left" type="warning">默认按钮</dc-button>
    <dc-button iconPosition="right" type="primary">默认按钮</dc-button>
    <dc-button iconPosition="right" type="danger">默认按钮</dc-button>
    <dc-button iconPosition="right" type="default">默认按钮</dc-button>
    <dc-button iconPosition="right" type="success">默认按钮</dc-button>
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
  }
}
</script>

<style lang="scss">

</style>

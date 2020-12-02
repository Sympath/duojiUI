<template>
    <div class="dj-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'dj-button-group',
    mounted () {
    let children = this.$el.children
    for (let i = 0; i < children.length; i++) {
      console.assert(children[i].tagName === 'BUTTON', '必须子节点是button')
    }
  }
}
</script>
<style lang="scss">
@import "../styles/_var.scss";
.dj-button-group {
  display: inline-flex;
  vertical-align: middle;
  button {
    border-radius: 0;
    position: relative;
    &:not(first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  button:hover {
    z-index: 1;
  }
  button:focus {
    z-index: 2;
  }
}
</style>
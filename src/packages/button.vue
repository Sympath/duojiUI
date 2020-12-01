<template>
  <button @click="($event)=>{
      this.$emit('click',$event)
    }" class="dc-button" :class="btnClass" :disabled="loading" :type="type">
     <dc-icon

        icon="loading"
        v-if="loading"
        class="icon"
    ></dc-icon>
     <dc-icon
        :icon="icon"
        v-else
        class="icon"
    ></dc-icon>
    <span v-if="this.$slots.default">
        <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    icon: String,
    iconPosition: {
      type: String,
      default:'left',
      validator(type) {
        if(!['left','right'].includes(type)){
          console.error(
            "位置必须是:" + `'left','right'`
          );
        }
        return true;

      }
    },
    type: {
      type: String,
      default: "default",
      validator(type) {
        if (
          type &&
          !["warning", "success", "danger", "info", "primary","default"].includes(type)
        ) {
          console.error(
            "类型必须是:" + `'warning','success','danger','info','primary','default'`
          );
        }
        return true;
      }
    }
  },
  computed: {
    btnClass(){
      let btnClass = [];
      btnClass.push(`dc-button-${this.iconPosition}`)
      return btnClass;
    }
  },
  name: "dc-button"
};
</script>
<style lang="scss">
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.dc-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: 42px;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,&:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $background;
    outline: none;
  }
  &[disabled]{
    cursor: not-allowed;
  }
  .icon {
    width: 16px;
    height: 16px;
    & + span {
      margin-left: 4px;
    }
  }
  &-left {
      span {
        order: 2;
      }
      svg {
        order: 1
      }
  }
  &-right {
    span {
      order: 1;
      margin-left: 0px;
      margin-right: 4px;
    }
    svg {
      order: 2
    }
  }

}
@each $type,$color in (primary:$primary, success:$success, info:$info, warning:$warning, danger:$danger) {
   button[type=#{$type}] {
      background:$color;
      border: 1px solid #{$color};
      color: #fff;
    }
  }
@each $type,$color in (primary:$primary-hover, success:$success-hover, info:$info-hover, warning:$warning-hover, danger:$danger-hover) {
    button[type=#{$type}]:hover {
        background: #{$color};
        border: 1px solid #{$color};
        color: #fff;
    }
}
@each $type,$color in (primary:$primary-active, success:$success-active, info:$info-active, warning:$warning-active, danger:$danger-active) {
    button[type=#{$type}]:active, button[type=#{$type}]:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
}
.icon{
  fill:#fff;
  width: 16px;height:16px;
}
.icon + span {
  margin-left: 5px;
}
span + .icon {
  margin-right: 5px;
}

</style>
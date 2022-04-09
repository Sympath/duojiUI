<template>
  <div class="three-column-layout-wrapper clearfix" :class="mode">
    <div class="parent" :style="wrapStyleObj">
      <div class="center">
        <div
          class="inner"
          :style="centerStyleObj"
          v-if="mode === 'threesome-wing'"
        >
          <slot name="center" />
        </div>
        <template v-else>
          <slot name="center" />
        </template>
      </div>
      <div class="left" :style="leftStyleObj"><slot name="left" /></div>
      <div class="right" :style="rightStyleObj"><slot name="right" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "three-column",
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
    rightWidth: {
      type: String,
      default: "0",
    },
    mode: {
      type: String,
      default: "float",
    }, // holy-grail  threesome-wing
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    leftStyleObj() {
      return {
        width: this.leftWidth,
        left: `-${this.leftWidth}`,
      };
    },
    rightStyleObj() {
      let modeMap = {
        "holy-grail": {
          width: this.rightWidth,
          marginLeft: `-${this.rightWidth}`,
          right: `-${this.rightWidth}`,
        },
        "threesome-wing": {
          width: this.rightWidth,
          marginLeft: `-${this.rightWidth}`,
        },
      };
      return modeMap[this.mode] || {};
    },
    centerStyleObj() {
      return {
        marginLeft: `${this.leftWidth}`,
        marginRight: `${this.rightWidth}`,
      };
    },

    wrapStyleObj() {
      let modeMap = {
        "holy-grail": {
          paddingLeft: this.leftWidth,
          paddingRight: this.rightWidth,
        },
        "threesome-wing": {},
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
.three-column-layout-wrapper {
  &.holy-grail {
    #layout > #three-column > .holy-grail();
  }
  &.threesome-wing {
    #layout > #three-column > .threesome-wing();
  }
}
</style>

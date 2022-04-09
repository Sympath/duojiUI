<script>
export default {
  name: "muti-column",
  props: {
    mode: {
      type: String,
      default: "flex",
    },
    mutiWidths: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  created() {},
  async mounted() {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    async initList() {},
  },
  render(h) {
    function sum(arr) {
      if (arr.length === 0) {
        return 0;
      }
      return arr
        .map((item) => Number(item.replace("px", "")))
        .reduce(function(prev, curr) {
          return prev + curr;
        });
    }
    function getRightStyleObj() {
      let leftWidth = sum(this.mutiWidths);
      let modeMap = {
        float: {
          width: `calc(100% - ${leftWidth}px)`,
          // marginLeft: leftWidth,
        },
        table: {},
        position: {
          left: `${leftWidth}px`,
          top: 0,
        },
        flex: {},
      };
      return modeMap[this.mode] || {};
    }
    let rightStyleObj = getRightStyleObj.call(this);
    let originMuti = JSON.parse(JSON.stringify(this.mutiWidths));
    let columns = this.mutiWidths.map((columnWidth, i) => {
      let slot = this.$slots[`column-${i + 1}`];
      return h(
        "div",
        {
          style: {
            width: columnWidth,
            left: `${sum(originMuti.slice(0, i))}px`,
          },
          class: `column column-${i + 1}`,
        },
        [slot]
      );
    });
    let slot = this.$slots[`right`];
    let commonRightColumn = h(
      "div",
      {
        class: `right`,
        style: rightStyleObj,
      },
      [slot]
    );
    let rightColumn = commonRightColumn;
    if (this.mode === "float") {
      rightColumn = h(
        "div",
        {
          class: "right-fix",
          style: rightStyleObj,
        },
        [
          h(
            "div",
            {
              class: `right`,
            },
            [slot]
          ),
        ]
      );
    }
    return h(
      "div",
      {
        class: `muti-layout-wrapper ${this.mode}`,
      },
      [...columns, rightColumn]
    );
  },
};
</script>
<style scoped lang="less">
@import "../less/common.less";
.muti-layout-wrapper {
  &.float {
    #layout > #muti-column > .float-clear-mixin();
  }
  &.table {
    #layout > #muti-column > .table-mixin();
  }
  &.position {
    height: 100px;
    #layout > #muti-column > .position-mixin();
  }
  &.flex {
    #layout > #muti-column > .flex-mixin();
  }
  // .column {
  //   float: left;
  // }
}
</style>

<template>
    <div class="dj-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = "dj-col";
export default {
    name: 'dj-col',
    data(){
        return {
            gutter: 0
        }
    },
    props: {
        span: {
            type:Number,
            default: 4
        },
        offset: {
            type: Number,
            default: null
        },
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
        xxl: [Number, Object]
    },
    computed: {
        colClass(){
            let classes = [];
            classes.push(`dj-col-${this.span}`);
            if (this.offset) {
                classes.push(`dj-col-offset-${this.offset}`)
            }
            ["xs", "sm", "md", "lg", "xl"].forEach(type => {
                if (typeof this[type] === "object") {
                    let { span, offset } = this[type];
                    span && classes.push(`${prefixCls}-${type}-${span}`); // prefixCls-xs-1
                    offset && classes.push(`${prefixCls}-${type}-offset-${offset}`); // prefixCls-xs-offset-1
                } else {
                    this[type] && classes.push(`${prefixCls}-${type}-${this[type]}`); // prefixCls-xs-1
                }
            });

            return classes;
        },
        colStyle(){
            let style = {};
            if(this.gutter){
                style = {
                    ...style,
                    paddingLeft: this.gutter/2 + 'px',
                    paddingRight: this.gutter/2 + 'px',
                }
            }
            return style;
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
@for $i from 1 through 24 {
    .dj-col-#{$i} {
        width: $i / 24 * 100%;
    }
    .dj-col-offset-#{$i} {
        margin-left: $i / 24 * 100%;
    }
}
@include res(xs) {
  @for $i from 1 through 24 {
    .dj-col-xs-#{$i} {
      width: $i/24 * 100%;
    }
    .dj-col-xs-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(sm) {
  @for $i from 1 through 24 {
    .dj-col-sm-#{$i} {
      width: $i/24 * 100%;
    }
    .dj-col-sm-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(md) {
  @for $i from 1 through 24 {
    .dj-col-md-#{$i} {
      width: $i/24 * 100%;
    }
    .dj-col-md-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(lg) {
  @for $i from 1 through 24 {
    .dj-col-lg-#{$i} {
      width: $i/24 * 100%;
    }
    .dj-col-lg-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(xl) {
  @for $i from 1 through 24 {
    .dj-col-xl-#{$i} {
      width: $i/24 * 100%;
    }
    .dj-col-xl-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}

</style>
<template>
    <div class="dj-col" :class="colClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'dj-col',
    data(){
        
    },
    props: {
        span: {
            type:Number,
            default: 4
        },
        offset: {
            type: Number,
            default: null
        }
    },
    computed: {
        colClass(){
            let classes = [];
            classes.push(`dj-col-${this.span}`);

            if (this.offset) {
                classes.push(`dj-col-offset-${this.offset}`)
            }
            return classes;
        }
    }
}
</script>

<style lang="scss">
@for $i from 1 through 24 {
    .dj-col-#{$i} {
        width: $i / 24 * 100%;
    }
    .dj-col-offset-#{$i} {
        margin-left: $i / 24 * 100%;
    }
}

</style>
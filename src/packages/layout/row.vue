<template>
    <div class="dj-row" :style="rowStyl">
        <slot></slot>
    </div>
</template>

<script>
import { oneOf } from '../utils/assist';
export default {
    name: 'dj-row',
    props: {
        gutter: {
            type: Number,
            default: 0
        },
        justify: {
            type:String,
            validator(value){
                 return oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
            }
        }
    },
    data(){
        return {}
    },
    mounted(){
        this.$children.forEach(child=>{
            child.gutter = this.gutter
        })
    },
    computed: {
        rowStyl(){
            let style = {};
            if(this.gutter){
                style = {
                    ...style,
                    marginLeft: -this.gutter/2 + 'px',
                    marginRight: -this.gutter/2 + 'px',
                }
            }
            if(this.justify){
                let key = ['start','end'].includes(this.justify) ? 'flex-'+ this.justify : this.justify
                style = {
                    ...style,
                   justifyContent: key
                }
            }
            return style;
        }
    }
}
</script>

<style>
.dj-row {
    display: flex;
    overflow: hidden;
}
</style>
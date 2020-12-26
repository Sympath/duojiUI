<template>
    <section class="dj-container" :class="{isVertaical}">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'dj-container',
    data(){
        return {
            isVertaical: true,
        }
    },
    mounted(){
        this.isVertaical = this.$children.some(child => ['dj-footer','dj-header'].includes(child.$options.name))
    }

}
</script>

<style>
.dj-container {
    display: flex;
    flex-direction: row;
    flex: 1;
}
.dj-container .isVertaical {
    flex-direction: column;
}
</style>
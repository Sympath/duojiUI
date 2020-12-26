<template>
    <aside class="dj-aside" :style="{
        width
    }">
    <slot></slot>
    </aside>
</template>

<script>
export default {
    name: 'dj-aside',
    props: {
        width: {
            type:String,
            default: '300px'
        }
    }
}
</script>

<style>

</style>
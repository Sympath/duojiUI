<template>
    <div class="dj-row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'dj-row',
    props: {
        gutter: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style>
.dj-row {
    display: flex;
}
</style>
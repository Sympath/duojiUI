<template>
    <main class="dj-main">
        <slot></slot>
    </main>
</template>

<script>
export default {
    name: 'dj-main'
}
</script>

<style>
.dj-main {
    flex: 1;
    padding: 20px;
}
</style>
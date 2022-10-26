<script setup lang="ts">
import { onMounted } from 'vue';
import { create } from '../lib/core';

onMounted(() => {
    const div = document.getElementById('mota')!;
    create(div);
});
</script>

<template>
    <div id="mota"></div>
</template>

<style scoped lang="less">
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#mota {
    width: 95vw;
    height: 95vh;
}
</style>

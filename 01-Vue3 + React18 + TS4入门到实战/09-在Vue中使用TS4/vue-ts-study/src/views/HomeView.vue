<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>This is an home page</h1>
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <p>信息：{{ info.tag }} -- {{ info.address }}</p>

        <p>{{ id }} -- {{ count }}</p>
    </div>
</template>

<script setup lang="ts">
    import { useStore } from '@/store';

    const store = useStore();

    const { name, age, info } = store.state;
    const { id, count } = store.state.item;
</script>

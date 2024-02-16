<template>
    <h2>仿Element Plus的el-rate评分组件</h2>
    <ElRate :max="num" v-model:value="value1" />
    <ElRate :max="num" v-model:value="value2" />

    <h2>el-switch开关组件</h2>
    <ElSwitch v-model:state="state1" /> {{ state1 ? '开' : '关' }}
    <br />
    <ElSwitch v-model:state="state2" /> {{ state2 ? '开' : '关' }}

    <h2>element-plus框架</h2>
    <ElementPlus />
</template>

<script>
    import ElRate from './components/ElRate.vue';
    import ElSwitch from './components/ElSwitch.vue';
    import ElementPlus from './components/ElementPlus.vue';

    export default {
        name: 'App',
        data() {
            return {
                num: 10,
                value1: 3,
                value2: 4,
                state1: true,
                state2: false,
            };
        },
        components: { ElRate, ElSwitch, ElementPlus },
    };
</script>

<style></style>

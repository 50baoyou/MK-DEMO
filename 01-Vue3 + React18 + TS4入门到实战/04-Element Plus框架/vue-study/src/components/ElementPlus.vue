<template>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary" size="large">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>

    {{ value }}
    <!-- 官网使用 v-model -->
    <el-rate v-model:value="value" />
    {{ input }}
    <el-input v-model="input" placeholder="Please input" />

    <el-button @click="open">Show message</el-button>
</template>

<script>
    import { ElMessage } from 'element-plus';
    export default {
        data() {
            return {
                value: 3,
                input: '',
            };
        },
        methods: {
            open: () => {
                ElMessage('this is a message.');
            },
        },
    };
</script>

<style scoped></style>
